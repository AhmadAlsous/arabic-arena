import styled from 'styled-components';

const StyledLessonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 1.5rem;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 20px auto;
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
      <Title>{lesson.titleEnglish}</Title>
      <Title>{lesson.titleArabic}</Title>
      <ImageContainer>
        {lesson.video ? null : (
          <Image src={lesson.imageLink} alt={lesson.titleEnglish} />
        )}
      </ImageContainer>
      {/* <iframe
        width='470'
        height='404'
        src='https://edpuzzle.com/embed/media/65414c42bb1e074025510209'
        frameBorder='0'
        allowfullscreen='true'
      ></iframe> */}
      {/* <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/a3j6RvbSBlU?si=DxsTKWHx3RYleuTS'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe> */}
      {/* <iframe
        width='600'
        height='400'
        scrolling='no'
        src='https://app.playpos.it/go/share/1852316/1661094/0/0/video-test'
        allow='autoplay *;'
        allowfullscreen='true'
        frameBorder='0'
      ></iframe> */}
    </StyledLessonInfo>
  );
}

export default LessonInfo;
