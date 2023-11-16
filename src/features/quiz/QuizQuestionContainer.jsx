import styled from 'styled-components';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { questions } from '../../data/DummyQuestions';
import QuizQuestion from './QuizQuestion';

const QuizContainer = styled.div`
  margin: 40px 10%;
  padding: 20px 25px 15px 25px;
  border: 1px solid #bbb;
  box-shadow: 0px 2px 20px 5px #d5d5d5;
`;

const QuizHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuestionNumber = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0 0 20px 0;
  letter-spacing: 2px;
`;

const TimerContainer = styled.div`
  margin-right: 10px;
  font-size: 1.3rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

const NavButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const dummyQuestions = questions;

function QuizQuestionContainer() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedValue, setSelectedValue] = useState([]);
  const [answers, setAnswers] = useState(
    Array(dummyQuestions.length).fill(null)
  );

  if (dummyQuestions.length === 0) return null;

  const handleNext = () => {
    setCurrentQuestion((cur) => {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedValue;
      setAnswers(newAnswers);
      const nextQuestion = cur + 1;
      const isAnswered = answers[nextQuestion] != null;
      setSelectedValue(isAnswered ? answers[nextQuestion] : '');
      return nextQuestion;
    });
  };

  const handlePrevious = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedValue;
    setAnswers(newAnswers);
    setCurrentQuestion((cur) => {
      const prevQuestion = cur - 1;
      const isAnswered = answers[prevQuestion] != null;
      setSelectedValue(isAnswered ? answers[prevQuestion] : '');
      return prevQuestion;
    });
  };

  return (
    <QuizContainer>
      <QuizHeader>
        <QuestionNumber>
          Question
          {dummyQuestions.length !== 1
            ? ` ${currentQuestion + 1} / ${dummyQuestions.length}`
            : null}
        </QuestionNumber>
        <TimerContainer>00:30:00</TimerContainer>
      </QuizHeader>
      <QuizQuestion
        question={dummyQuestions[currentQuestion]}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        isAnswerChecked={false}
      />
      <ButtonsContainer>
        {dummyQuestions.length !== 1 && (
          <NavButtonsContainer>
            {currentQuestion !== 0 && (
              <Button onClick={handlePrevious}>Previous</Button>
            )}
            <Button
              disabled={currentQuestion === dummyQuestions.length - 1}
              onClick={handleNext}
            >
              Next
            </Button>
          </NavButtonsContainer>
        )}
      </ButtonsContainer>
    </QuizContainer>
  );
}

export default QuizQuestionContainer;
