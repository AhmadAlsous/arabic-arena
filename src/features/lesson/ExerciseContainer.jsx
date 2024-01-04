import styled from 'styled-components';
import { useState } from 'react';
import Button from '@mui/material/Button';
import QuizQuestion from '../quiz/QuizQuestion';
import Modal from '../../UI/Modal';
import { findLastAnsweredQuestion } from '../../utility/quizCalculations';

const StyledExerciseContainer = styled.div`
  margin: 20px 10% 40px 10%;
  padding: 20px 25px 15px 25px;
  border: 1px solid #bbb;
  box-shadow: 0 5px 20px 2px #ccc;
  background-color: #fff;

  @media (max-width: 1200px) {
    margin: 20px 3% 40px 3%;
  }

  @media (max-width: 757px) {
    border: none;
    padding: 20px 10px 15px 10px;
    box-shadow: none;
  }

  @media (max-width: 600px) {
    margin: 20px 0 40px 0;
  }
`;

const QuestionNumber = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0 0 20px 0;
  letter-spacing: 2px;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }

  @media (max-width: 757px) {
    padding-top: 17px;
    border-top: 1px solid #999;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  @media (max-width: 757px) {
    padding-bottom: 16px;
    border-bottom: 1px solid #999;
  }
`;

const NavButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 11px 0 0 0;
  letter-spacing: 1.5px;
`;

const ConfirmTextContainer = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  margin: 30px;
  text-align: center;
`;

const ConfirmText = styled.p`
  margin: 0;
  letter-spacing: 0.5px;
`;

function ExerciseContainer({ exercises, lessonName, lesson }) {
  const savedAnswers = JSON.parse(
    localStorage.getItem(`${lessonName}-answers`)
  );
  const [currentQuestion, setCurrentQuestion] = useState(
    savedAnswers ? findLastAnsweredQuestion(savedAnswers) : 0
  );
  const [selectedValue, setSelectedValue] = useState(
    savedAnswers ? savedAnswers[currentQuestion] : []
  );
  const [isAnswerChecked, setIsAnswerChecked] = useState(!!savedAnswers);
  const [answers, setAnswers] = useState(
    savedAnswers
      ? savedAnswers
      : Array.from({ length: exercises.length }, () => [])
  );

  if (exercises.length === 0) return null;

  const handleQuestionChange = (questionNumber) => {
    setCurrentQuestion(questionNumber);
    const isAnswered = answers[questionNumber].length !== 0;
    setIsAnswerChecked(isAnswered);
    setSelectedValue(isAnswered ? answers[questionNumber] : '');
  };

  const handleCheckAnswer = () => {
    setIsAnswerChecked(true);
  };

  const handleChangeAnswer = (selectedValue) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedValue;
    setAnswers(newAnswers);
    localStorage.setItem(`${lessonName}-answers`, JSON.stringify(newAnswers));
  };

  const handleRestart = () => {
    setAnswers(Array.from({ length: exercises.length }, () => []));
    localStorage.removeItem(`${lessonName}-answers`);
    setCurrentQuestion(0);
    setIsAnswerChecked(false);
    setSelectedValue([]);
  };

  if (currentQuestion === exercises.length - 1 && isAnswerChecked) {
    lesson.isCompleted = true;
  }

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
        handleChangeAnswer={handleChangeAnswer}
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
              <Button onClick={() => handleQuestionChange(currentQuestion - 1)}>
                Previous
              </Button>
            )}
            {currentQuestion === exercises.length - 1 ? (
              <Modal
                trigger={<Button disabled={!isAnswerChecked}>Restart</Button>}
                btn='Restart'
                onSubmit={handleRestart}
              >
                <ConfirmContainer>
                  <Title>Confirmation</Title>
                  <ConfirmTextContainer>
                    <ConfirmText>
                      Are you sure you want to restart this lesson's exercises?
                    </ConfirmText>
                    <ConfirmText>All your answers will be lost.</ConfirmText>
                  </ConfirmTextContainer>
                </ConfirmContainer>
              </Modal>
            ) : (
              <Button
                onClick={() => handleQuestionChange(currentQuestion + 1)}
                disabled={!isAnswerChecked}
              >
                Next
              </Button>
            )}
          </NavButtonsContainer>
        )}
      </ButtonsContainer>
    </StyledExerciseContainer>
  );
}

export default ExerciseContainer;
