import styled from 'styled-components';
import LessonBox from './lessonBox';

const StyledLessonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 50px 30px;
`;

function LessonsContainer({ lessons }) {
  return (
    <StyledLessonsContainer>
      {lessons.map((lesson) => (
        <LessonBox key={lesson.id} lesson={lesson} />
      ))}
    </StyledLessonsContainer>
  );
}

export default LessonsContainer;
