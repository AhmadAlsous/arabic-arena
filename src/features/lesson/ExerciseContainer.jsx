import styled from 'styled-components';
import { useState } from 'react';
import Button from '@mui/material/Button';
import QuizQuestion from '../quiz/QuizQuestion';

const StyledExerciseContainer = styled.div`
  margin: 40px 10%;
  padding: 20px 25px 15px 25px;
  border: 1px solid #bbb;
  box-shadow: 0 5px 20px 2px #ccc;
`;

const QuestionNumber = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0 0 20px 0;
  letter-spacing: 2px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const NavButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

function ExerciseContainer({ exercises }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedValue, setSelectedValue] = useState([]);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [answers, setAnswers] = useState(Array(exercises.length).fill(null));

  if (exercises.length === 0) return null;

  const handleNext = () => {
    setCurrentQuestion((cur) => {
      const nextQuestion = cur + 1;
      const isAnswered = answers[nextQuestion] != null;
      setIsAnswerChecked(isAnswered);
      setSelectedValue(isAnswered ? answers[nextQuestion] : '');
      return nextQuestion;
    });
  };

  const handlePrevious = () => {
    setCurrentQuestion((cur) => {
      const prevQuestion = cur - 1;
      const isAnswered = answers[prevQuestion] != null;
      setIsAnswerChecked(isAnswered);
      setSelectedValue(isAnswered ? answers[prevQuestion] : '');
      return prevQuestion;
    });
  };

  const handleCheckAnswer = () => {
    setIsAnswerChecked(true);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedValue;
    setAnswers(newAnswers);
  };

  return (
    <StyledExerciseContainer>
      <QuestionNumber>
        Exercise
        {exercises.length !== 1
          ? ` ${currentQuestion + 1} / ${exercises.length}`
          : null}
      </QuestionNumber>
      <QuizQuestion
        question={exercises[currentQuestion]}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        isAnswerChecked={isAnswerChecked}
      />
      <ButtonsContainer>
        <Button
          disabled={selectedValue.length == 0 || isAnswerChecked}
          onClick={handleCheckAnswer}
        >
          Check Answer
        </Button>
        {exercises.length !== 1 && (
          <NavButtonsContainer>
            {currentQuestion !== 0 && (
              <Button onClick={handlePrevious}>Previous</Button>
            )}
            <Button
              disabled={currentQuestion === exercises.length - 1}
              onClick={handleNext}
            >
              Next
            </Button>
          </NavButtonsContainer>
        )}
      </ButtonsContainer>
    </StyledExerciseContainer>
  );
}

export default ExerciseContainer;
