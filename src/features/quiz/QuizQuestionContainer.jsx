import styled from 'styled-components';
import Button from '@mui/material/Button';
import QuizQuestion from './QuizQuestion';
import QuizTimer from './QuizTimer';
import QuizSubmitModal from './QuizSubmitModal';
import { useSearchParams } from 'react-router-dom';

const QuizContainer = styled.div`
  margin: 40px 10%;
  padding: 20px 25px 15px 25px;
  border: 1px solid #bbb;
  box-shadow: 0px 2px 20px 3px #d9d9d9;
  background-color: #fff;
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
  justify-content: space-between;
  margin-top: 15px;
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
}) {
  const [searchParams] = useSearchParams();
  const currentQuestion = parseInt(searchParams.get('question'), 10) || 1;

  const time = new Date();
  time.setSeconds(time.getSeconds() + timeLimit * 60);

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
            <QuizTimer submit={handleSubmit} expiryTimestamp={time} />
          </TimerContainer>
        )}
      </QuizHeader>
      <QuizQuestion
        question={questions[currentQuestion - 1]}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        isAnswerChecked={isAnswerChecked}
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
            {currentQuestion === questions.length && !isAnswerChecked ? (
              <QuizSubmitModal
                btn={'Submit'}
                onSubmit={handleSubmit}
                type={'submit'}
              />
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
