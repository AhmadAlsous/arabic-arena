import styled from 'styled-components';
import EdpuzzleVideo from './EdpuzzleVideo';
import YoutubeVideo from './YoutubeVideo';
import { isEdpuzzle } from '../../utility/stringOperations';
import Transcript from './Transcript';

const StyledLessonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 40px 40px 40px;

  @media (max-width: 1000px) {
    padding: 30px 30px 40px 30px;
  }

  @media (max-width: 700px) {
    padding: 30px 10px 40px 10px;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 30px;
  font-family: 'Feather';
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 1px;

  @media (max-width: 1000px) {
    font-size: 1.3rem;
  }

  @media (max-width: 700px) {
    font-size: 1.1rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Arabic = styled.span`
  font-family: 'Al-Jazeera';
  font-size: 1.8rem;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }

  @media (max-width: 700px) {
    font-size: 1.3rem;
  }

  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;

function LessonInfo({ lesson }) {
  return (
    <StyledLessonInfo>
      <TitleContainer>
        <Title>
          <Arabic>{lesson.titleArabic}</Arabic>
        </Title>
        <Title>{lesson.titleEnglish}</Title>
      </TitleContainer>
      {lesson.videoLink &&
        (isEdpuzzle(lesson.videoLink) ? (
          <EdpuzzleVideo url={lesson.videoLink} />
        ) : (
          <YoutubeVideo url={lesson.videoLink} />
        ))}
      {lesson.videoText && <Transcript>{lesson.videoText}</Transcript>}
    </StyledLessonInfo>
  );
}

export default LessonInfo;
