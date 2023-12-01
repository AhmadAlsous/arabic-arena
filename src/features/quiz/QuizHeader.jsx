import styled from 'styled-components';
import QuestionsMenuButton from './QuestionsMenuButton';

const StyledLessonBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  align-items: center;
  border-bottom: 1.5px solid #888888;
`;

const NavContainer = styled.div`
  font-size: 0.9rem;
  margin-right: 30px;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 1.5px;
  margin-left: 10px;
`;

function QuizHeader({
  quizTitle,
  questions,
  handleSubmit,
  selectedValue,
  results,
  isAnswerChecked,
  handleQuestionChange,
  answers,
}) {
  return (
    <StyledLessonBar>
      <Title>{quizTitle}</Title>
      {!results && !isAnswerChecked && (
        <NavContainer>
          <QuestionsMenuButton
            questions={questions}
            handleSubmit={handleSubmit}
            selectedValue={selectedValue}
            handleQuestionChange={handleQuestionChange}
            answers={answers}
          />
        </NavContainer>
      )}
    </StyledLessonBar>
  );
}

export default QuizHeader;
