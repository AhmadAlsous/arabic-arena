import styled from 'styled-components';
import Button from '@mui/material/Button';
import QuizQuestion from './QuizQuestion';
import QuizTimer from './QuizTimer';
import QuizSubmitModal from './QuizSubmitModal';
import { UserContext } from '../UserContext';
import { useContext } from 'react';

const QuizContainer = styled.div`
  margin: 40px 10%;
  padding: 20px 25px 15px 25px;
  border: 1px solid #bbb;
  box-shadow: 0px 2px 20px 3px #d9d9d9;
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

const QuizHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuestionNumber = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0 0 20px 0;
  letter-spacing: 2px;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const TimerContainer = styled.div`
  margin-right: 10px;
  font-size: 1.3rem;
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

function QuizQuestionContainer({
  time: timeLimit,
  selectedValue,
  setSelectedValue,
  isAnswerChecked,
  questions,
  handleQuestionChange,
  handleClear,
  handleSubmit,
  handleFinishReview,
  handleChangeAnswer,
  currentQuestion,
  quizId,
}) {
  const time = new Date();
  const { user } = useContext(UserContext);
  time.setSeconds(time.getSeconds() + timeLimit * 60);
  if (!localStorage.getItem(`${user.id}${quizId}-time`) && !isAnswerChecked)
    localStorage.setItem(`${user.id}${quizId}-time`, time);

  if (questions.length === 0) return null;

  return (
    <QuizContainer>
      <QuizHeader>
        <QuestionNumber>
          Question
          {questions.length !== 1
            ? ` ${currentQuestion} / ${questions.length}`
            : null}
        </QuestionNumber>
        {!isAnswerChecked && (
          <TimerContainer>
            <QuizTimer submit={handleSubmit} quizId={quizId} />
          </TimerContainer>
        )}
      </QuizHeader>
      <QuizQuestion
        question={questions[currentQuestion - 1]}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        isAnswerChecked={isAnswerChecked}
        handleChangeAnswer={handleChangeAnswer}
      />
      <ButtonsContainer>
        {!isAnswerChecked ? (
          <Button disabled={selectedValue.length == 0} onClick={handleClear}>
            Clear Choice
          </Button>
        ) : (
          <Button onClick={handleFinishReview}>Finish Review</Button>
        )}
        {questions.length !== 1 && (
          <NavButtonsContainer>
            {currentQuestion !== 1 && (
              <Button onClick={() => handleQuestionChange(currentQuestion - 1)}>
                Previous
              </Button>
            )}
            {(currentQuestion === questions.length || questions.length === 1) &&
            !isAnswerChecked ? (
              <QuizSubmitModal btn={'Submit'} onSubmit={handleSubmit} />
            ) : (
              <Button
                disabled={currentQuestion === questions.length}
                onClick={() => handleQuestionChange(currentQuestion + 1)}
              >
                Next
              </Button>
            )}
          </NavButtonsContainer>
        )}
      </ButtonsContainer>
    </QuizContainer>
  );
}

export default QuizQuestionContainer;
