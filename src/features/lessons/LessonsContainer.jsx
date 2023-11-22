import styled from 'styled-components';
import LessonBox from './lessonBox';
import QuizStartConfirm from '../quizzes/QuizStartConfirm';

const StyledLessonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 50px 30px;
`;

function LessonsContainer({ lessons, isQuiz }) {
  return (
    <StyledLessonsContainer>
      {lessons.map((lesson) =>
        isQuiz ? (
          <QuizStartConfirm
            key={lesson.quizId}
            quiz={lesson}
            type={'confirm'}
          />
        ) : (
          <LessonBox key={lesson.id} lesson={lesson} />
        )
      )}
    </StyledLessonsContainer>
  );
}

export default LessonsContainer;
