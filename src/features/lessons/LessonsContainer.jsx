import styled from 'styled-components';
import LessonBox from './LessonBox';
import QuizStartConfirm from '../quizzes/QuizStartConfirm';

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

function LessonsContainer({ lessons, isQuiz }) {
  return (
    <StyledLessonsContainer>
      {lessons.map((lesson) =>
        isQuiz ? (
          <QuizStartConfirm key={lesson.id} quiz={lesson} type={'confirm'} />
        ) : (
          <LessonBox key={lesson.id} lesson={lesson} />
        )
      )}
    </StyledLessonsContainer>
  );
}

export default LessonsContainer;
