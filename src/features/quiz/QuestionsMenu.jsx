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
  answers,
  handleClose,
  handleQuestionChange,
  handleSubmit,
  currentQuestion,
}) {
  return (
    <Menu>
      <StyledQuestionsMenu>
        {questions.map((question, index) => (
          <QuestionNumber
            key={question.questionId}
            questionNumber={index + 1}
            isActive={currentQuestion === index + 1}
            status={answers[index]?.length ? 'answered' : 'unanswered'}
            handleClose={handleClose}
            handleQuestionChange={handleQuestionChange}
          />
        ))}
      </StyledQuestionsMenu>
      <Divider sx={{ width: '100%' }} />
      <StyledButton>
        <QuizSubmitModal
          btn={'Submit Answers'}
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      </StyledButton>
    </Menu>
  );
}

export default QuestionsMenu;
