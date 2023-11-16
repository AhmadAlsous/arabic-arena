import styled from 'styled-components';
import QuestionNumber from './QuestionNumber';

const StyledQuestionsMenu = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
  justify-content: flex-start;
  gap: 8px;
`;

function QuestionsMenu({ questions, currentQuestion }) {
  return (
    <StyledQuestionsMenu>
      {questions.map((question, index) => (
        <QuestionNumber key={question.id} questionNumber={index + 1} />
      ))}
    </StyledQuestionsMenu>
  );
}

export default QuestionsMenu;
