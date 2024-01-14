import { useContext, useEffect, useState } from 'react';
import QuizHeader from './QuizHeader';
import QuizQuestionContainer from './QuizQuestionContainer';
import QuizResults from './QuizResults';
import {
  unstable_useBlocker,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import {
  getPlacementActive,
  getQuizActive,
  replaceDashesWithSpaces,
} from '../../utility/stringOperations';
import BlockerModal from '../../UI/BlockerModal';
import { fetchPlacementTest, fetchQuiz } from '../../services/quizServices';
import { useMutation, useQuery } from '@tanstack/react-query';
import { transformQuiz } from '../../utility/transforms';
import toast from 'react-hot-toast';
import { Button, Stack } from '@mui/material';
import Spinner from '../../UI/Spinner';
import { UserContext } from '../UserContext';
import { updateUser } from '../../services/userServices';
import {
  getPercentage,
  getPlacement,
  getResult,
} from '../../utility/quizCalculations';

function Quiz({ isPlacement = false, results = false }) {
  const { user, setUser } = useContext(UserContext);
  const { quiz: quizName } = useParams();
  const name = isPlacement ? 'placement' : quizName;

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [replaceDashesWithSpaces(name)],
    queryFn: () =>
      isPlacement
        ? fetchPlacementTest()
        : fetchQuiz(replaceDashesWithSpaces(name)),
  });
  const quiz = data
    ? transformQuiz(data)
    : {
        titleArabic: '',
        titleEnglish: '',
        level: '',
        type: '',
        time: 0,
        questions: [],
      };
  const { time, questions } = quiz;

  const hasTakenPlacementTest = user.level;
  const [selectedValue, setSelectedValue] = useState([]);
  const [answers, setAnswers] = useState(() => {
    const savedAnswers = localStorage.getItem(`${user.id}${name}-answers`);
    return savedAnswers
      ? JSON.parse(savedAnswers)
      : Array.from({ length: 200 }, () => []);
  });
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(
    parseInt(searchParams.get('question'), 10) || 1
  );

  let blocker = unstable_useBlocker(({ currentLocation, nextLocation }) =>
    isPlacement
      ? currentLocation.pathname !== nextLocation.pathname &&
        getPlacementActive(currentLocation.pathname) &&
        !nextLocation.pathname.includes('/placement/')
      : currentLocation.pathname !== nextLocation.pathname &&
        getQuizActive(currentLocation.pathname) &&
        !nextLocation.pathname.includes('/quiz/')
  );

  let location = useLocation();
  useEffect(() => {
    const cur = parseInt(searchParams.get('question'), 10) || 1;
    setCurrentQuestion(cur);
    const isAnswered = answers[cur - 1] != null;
    setSelectedValue(isAnswered ? answers[cur - 1] : '');
  }, [location]);

  const editUser = useMutation({
    mutationFn: (user) => updateUser(user),
  });

  if (error) {
    toast.error(
      <Stack direction='row' sx={{ mr: '-15px' }}>
        <p>{`Error fetching ${isPlacement ? 'placement test' : 'quiz'}.`}</p>
        <Button
          sx={{
            textTransform: 'none',
            color: 'black',
            fontSize: '0.95rem',
          }}
          onClick={() => {
            refetch();
            toast.remove();
          }}
        >
          Try again?
        </Button>
      </Stack>,
      { duration: 5000 }
    );
    return;
  }

  const handleQuestionChange = (questionNumber) => {
    searchParams.set('question', questionNumber);
    setSearchParams(searchParams);
  };

  const handleClear = () => {
    setSelectedValue([]);
    handleChangeAnswer([]);
  };

  const quizTitle = isPlacement ? 'Placement Test' : 'Quizzes';
  const intermediate = data && isPlacement ? data.intermediate : 0;
  const advanced = data && isPlacement ? data.advanced : 0;
  console.log(intermediate, advanced);

  const handleSubmit = () => {
    let updatedUser = { ...user };
    let studentLevel;
    if (isPlacement) {
      const numCorrectAnswers = getResult(questions, answers);
      const percentage = getPercentage(numCorrectAnswers, questions.length);
      studentLevel = getPlacement(percentage, intermediate, advanced);
      updatedUser = {
        ...updatedUser,
        level: studentLevel,
      };
    } else if (
      user.completedQuizzes.filter(
        (completedQuiz) => quiz.id === completedQuiz.id
      ).length === 0
    ) {
      updatedUser = {
        ...updatedUser,
        completedQuizzes: [
          ...updatedUser.completedQuizzes,
          { id: quiz.id, level: quiz.level },
        ],
      };
    }
    setUser(updatedUser);
    editUser.mutate(updatedUser);
    localStorage.removeItem(`${user.id}${quiz.id}-time`);
    searchParams.delete('question');
    setSearchParams(searchParams);
    navigate('./results', { state: { calculatedLevel: studentLevel } });
  };

  const handleFinishReview = () => {
    searchParams.delete('question');
    setSearchParams(searchParams);
    navigate(isPlacement ? `/placement/test/results` : `/quiz/${name}/results`);
  };

  const handleChangeAnswer = (selectedValue) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion - 1] = selectedValue;
    setAnswers(newAnswers);
    localStorage.setItem(
      `${user.id}${name}-answers`,
      JSON.stringify(newAnswers)
    );
  };

  const handleLeaveQuiz = () => {
    localStorage.removeItem(`${user.id}${name}-answers`);
    localStorage.removeItem(`${user.id}${quiz.id}-time`);
    blocker.proceed();
  };

  return (
    <>
      {isLoading && (
        <Stack justifyContent='center' alignItems='center' height={400}>
          <Spinner />
        </Stack>
      )}
      {!isLoading && (
        <>
          <QuizHeader
            quizTitle={quizTitle}
            questions={questions}
            handleQuestionChange={handleQuestionChange}
            handleSubmit={handleSubmit}
            selectedValue={selectedValue}
            results={results}
            isAnswerChecked={isAnswerChecked}
            answers={answers}
            currentQuestion={currentQuestion}
          />
          {!results && (
            <QuizQuestionContainer
              time={time}
              questions={questions}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              isAnswerChecked={
                isPlacement && hasTakenPlacementTest ? true : isAnswerChecked
              }
              handleQuestionChange={handleQuestionChange}
              handleClear={handleClear}
              handleSubmit={handleSubmit}
              handleFinishReview={handleFinishReview}
              handleChangeAnswer={handleChangeAnswer}
              currentQuestion={currentQuestion}
              quizId={quiz.id}
            />
          )}
          {results && (
            <QuizResults
              isPlacement={isPlacement}
              intermediate={intermediate}
              advanced={advanced}
              setIsAnswerChecked={setIsAnswerChecked}
              questions={questions}
              answers={answers}
              setAnswers={setAnswers}
            />
          )}
          {blocker.state === 'blocked' ? (
            <BlockerModal
              cancel={() => blocker.reset()}
              proceed={handleLeaveQuiz}
            />
          ) : null}
        </>
      )}
    </>
  );
}

export default Quiz;
