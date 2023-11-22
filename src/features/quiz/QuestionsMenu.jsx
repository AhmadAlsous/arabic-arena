import styled from 'styled-components';
import QuestionNumber from './QuestionNumber';
import { Divider } from '@mui/material';
import QuizSubmitModal from './QuizSubmitModal';

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledQuestionsMenu = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
  justify-content: flex-start;
  gap: 9px;
`;

const StyledButton = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
`;

function QuestionsMenu({
  questions,
  currentQuestion,
  setCurrentQuestion,
  answers,
  setAnswers,
  selectedValue,
  handleClose,
  setIsSubmitted,
}) {
  const handleSubmit = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedValue;
    setAnswers(newAnswers);
    setIsSubmitted(true);
  };

  return (
    <Menu>
      <StyledQuestionsMenu>
        {questions.map((question, index) => (
          <QuestionNumber
            key={question.questionId}
            questionNumber={index + 1}
            isActive={currentQuestion === index}
            setCurrentQuestion={setCurrentQuestion}
            status={answers[index]?.length ? 'answered' : 'unanswered'}
            handleClose={handleClose}
          />
        ))}
      </StyledQuestionsMenu>
      <Divider sx={{ width: '100%' }} />
      <StyledButton>
        <QuizSubmitModal
          btn={'Submit Answers'}
          onClose={handleClose}
          onSubmit={handleSubmit}
          type={'submit'}
        />
      </StyledButton>
    </Menu>
  );
}

export default QuestionsMenu;
