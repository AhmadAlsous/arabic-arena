import styled from 'styled-components';
import EdpuzzleVideo from './EdpuzzleVideo';
import YoutubeVideo from './YoutubeVideo';
import { isEdpuzzle } from '../../utility/stringOperations';
import Transcript from './Transcript';

const StyledLessonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const TitleContainer = styled.div`
  margin-bottom: 20px;
  font-family: 'Feather';
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 1px;
`;

const ImageContainer = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 0px auto;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

function LessonInfo({ lesson }) {
  return (
    <StyledLessonInfo>
      <TitleContainer>
        <Title>{lesson.titleArabic}</Title>
        <Title>{lesson.titleEnglish}</Title>
      </TitleContainer>
      {!lesson.videoLink ? (
        lesson.includeImage && (
          <ImageContainer>
            <Image src={lesson.imageLink} alt={lesson.titleEnglish} />
          </ImageContainer>
        )
      ) : isEdpuzzle(lesson.videoLink) ? (
        <EdpuzzleVideo url={lesson.videoLink} />
      ) : (
        <YoutubeVideo url={lesson.videoLink} />
      )}
      {lesson.videoText && <Transcript>{lesson.videoText}</Transcript>}
    </StyledLessonInfo>
  );
}

export default LessonInfo;
