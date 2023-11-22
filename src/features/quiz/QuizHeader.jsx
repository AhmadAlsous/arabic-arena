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
  isPlacement,
  quizLevel,
  quizType,
  questions,
  currentQuestion,
  setCurrentQuestion,
  answers,
  setAnswers,
  selectedValue,
  isSubmitted,
  setIsSubmitted,
  isAnswerChecked,
}) {
  return (
    <StyledLessonBar>
      <Title>
        {isPlacement ? 'Placement Test' : `${quizLevel} ${quizType} Quiz`}
      </Title>
      {!isSubmitted && !isAnswerChecked && (
        <NavContainer>
          <QuestionsMenuButton
            questions={questions}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            answers={answers}
            setIsSubmitted={setIsSubmitted}
            setAnswers={setAnswers}
            selectedValue={selectedValue}
          />
        </NavContainer>
      )}
    </StyledLessonBar>
  );
}

export default QuizHeader;
