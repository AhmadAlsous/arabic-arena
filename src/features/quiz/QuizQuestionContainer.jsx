import styled from 'styled-components';
import Button from '@mui/material/Button';
import QuizQuestion from './QuizQuestion';
import QuizTimer from './QuizTimer';
import QuizSubmitModal from './QuizSubmitModal';

const QuizContainer = styled.div`
  margin: 40px 10%;
  padding: 20px 25px 15px 25px;
  border: 1px solid #bbb;
  box-shadow: 0px 2px 20px 3px #d9d9d9;
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
  answers,
  setAnswers,
  currentQuestion,
  setCurrentQuestion,
  selectedValue,
  setSelectedValue,
  setIsSubmitted,
  isAnswerChecked,
  questions,
}) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + timeLimit * 60);

  if (questions.length === 0) return null;

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

  const handleClear = () => {
    setSelectedValue([]);
  };

  const handleSubmit = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedValue;
    setAnswers(newAnswers);
    setIsSubmitted(true);
  };

  return (
    <QuizContainer>
      <QuizHeader>
        <QuestionNumber>
          Question
          {questions.length !== 1
            ? ` ${currentQuestion + 1} / ${questions.length}`
            : null}
        </QuestionNumber>
        {!isAnswerChecked && (
          <TimerContainer>
            <QuizTimer submit={handleSubmit} expiryTimestamp={time} />
          </TimerContainer>
        )}
      </QuizHeader>
      <QuizQuestion
        question={questions[currentQuestion]}
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
          <div></div>
        )}
        {questions.length !== 1 && (
          <NavButtonsContainer>
            {currentQuestion !== 0 && (
              <Button onClick={handlePrevious}>Previous</Button>
            )}
            {currentQuestion === questions.length - 1 && !isAnswerChecked ? (
              <QuizSubmitModal
                btn={'Submit'}
                onSubmit={handleSubmit}
                type={'submit'}
              />
            ) : currentQuestion === questions.length - 1 && isAnswerChecked ? (
              <Button onClick={() => setIsSubmitted(true)}>
                Finish Review
              </Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </NavButtonsContainer>
        )}
      </ButtonsContainer>
    </QuizContainer>
  );
}

export default QuizQuestionContainer;
