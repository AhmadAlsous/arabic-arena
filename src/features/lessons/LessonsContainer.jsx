import styled from 'styled-components';
import LessonBox from './LessonBox';
import QuizStartConfirm from '../quizzes/QuizStartConfirm';
import LessonSkeleton from './LessonSkeleton';

const StyledLessonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  gap: 50px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 50px 30px;

  @media (max-width: 1072px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

function LessonsContainer({ lessons, isQuiz, isLoading, error }) {
  const content = isLoading || error ? [0, 1, 2, 3, 4, 5] : lessons;
  return (
    <StyledLessonsContainer>
      {content.map((lesson) =>
        isLoading || error ? (
          <LessonSkeleton key={lesson} />
        ) : isQuiz ? (
          <QuizStartConfirm key={lesson.id} quiz={lesson} />
        ) : (
          <LessonBox key={lesson.id} lesson={lesson} />
        )
      )}
    </StyledLessonsContainer>
  );
}

export default LessonsContainer;
