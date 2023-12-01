import { useState } from 'react';
import QuizHeader from './QuizHeader';
import { quiz } from '../../data/DummyQuiz';
import QuizQuestionContainer from './QuizQuestionContainer';
import QuizResults from './QuizResults';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const dummyQuiz = quiz;

function Quiz({ isPlacement, results = false }) {
  const { quizLevel, quizType, questions, time } = dummyQuiz;
  const { quiz: quizName } = useParams();

  const [selectedValue, setSelectedValue] = useState([]);
  const [answers, setAnswers] = useState(
    Array.from({ length: questions.length }, () => [])
  );
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentQuestion = parseInt(searchParams.get('question'), 10) || 1;

  const handleQuestionChange = (questionNumber) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion - 1] = selectedValue;
    setAnswers(newAnswers);
    const isAnswered = answers[questionNumber - 1] != null;
    searchParams.set('question', questionNumber);
    setSearchParams(searchParams);
    setSelectedValue(isAnswered ? answers[questionNumber - 1] : '');
  };

  const handleClear = () => {
    setSelectedValue([]);
  };

  const handleSubmit = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion - 1] = selectedValue;
    setAnswers(newAnswers);
    searchParams.delete('question');
    setSearchParams(searchParams);
    navigate('./results');
  };

  const handleFinishReview = () => {
    searchParams.delete('question');
    setSearchParams(searchParams);
    console.log(isPlacement);
    navigate(isPlacement ? `/placement/results` : `/quiz/${quizName}/results`);
  };

  const quizTitle = isPlacement
    ? 'Placement Test'
    : `${quizLevel} ${quizType} Quiz`;

  return (
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
      />
      {!results && (
        <QuizQuestionContainer
          time={time}
          questions={questions}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          isAnswerChecked={isAnswerChecked}
          handleQuestionChange={handleQuestionChange}
          handleClear={handleClear}
          handleSubmit={handleSubmit}
          handleFinishReview={handleFinishReview}
        />
      )}
      {results && (
        <QuizResults
          isPlacement={isPlacement}
          setIsAnswerChecked={setIsAnswerChecked}
          questions={questions}
          answers={answers}
        />
      )}
    </>
  );
}

export default Quiz;
