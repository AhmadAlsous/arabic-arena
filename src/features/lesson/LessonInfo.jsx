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
`;

const Arabic = styled.span`
  font-family: 'Al-Jazeera';
  font-size: 1.8rem;
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
