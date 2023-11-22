import { useState } from 'react';
import QuizHeader from './QuizHeader';
import { quiz } from '../../data/DummyQuiz';
import QuizQuestionContainer from './QuizQuestionContainer';
import QuizResults from './QuizResults';

const dummyQuiz = quiz;

function Quiz({ isPlacement }) {
  const { quizLevel, quizType, questions, time } = dummyQuiz;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedValue, setSelectedValue] = useState([]);
  const [answers, setAnswers] = useState(
    Array.from({ length: questions.length }, () => [])
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const handleQuestionChange = (questionNumber) => {
    setCurrentQuestion(() => {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedValue;
      setAnswers(newAnswers);
      const isAnswered = answers[questionNumber] != null;
      setSelectedValue(isAnswered ? answers[questionNumber] : '');
      return questionNumber;
    });
  };

  return (
    <>
      <QuizHeader
        isPlacement={isPlacement}
        quizLevel={quizLevel}
        quizType={quizType}
        questions={questions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={handleQuestionChange}
        answers={answers}
        setAnswers={setAnswers}
        selectedValue={selectedValue}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        isAnswerChecked={isAnswerChecked}
      />
      {!isSubmitted && (
        <QuizQuestionContainer
          time={time}
          questions={questions}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          answers={answers}
          setAnswers={setAnswers}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
          isAnswerChecked={isAnswerChecked}
        />
      )}
      {isSubmitted && (
        <QuizResults
          isPlacement={isPlacement}
          setIsSubmitted={setIsSubmitted}
          setIsAnswerChecked={setIsAnswerChecked}
          setCurrentQuestion={handleQuestionChange}
          questions={questions}
          answers={answers}
        />
      )}
    </>
  );
}

export default Quiz;
