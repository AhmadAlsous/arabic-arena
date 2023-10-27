import { Link } from 'react-router-dom';
import { replaceSpacesWithDashes } from '../../utility/stringOperations';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import styled from 'styled-components';

const StyledLessonBox = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #444444;
  box-shadow: 0 5px 10px 2px grey;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 7px 20px 5px #666666;
  }

  @media (max-width: 1157px) {
    width: 500px;
    height: 400px;
  }

  @media (max-width: 940px) {
    width: 400px;
    height: 300px;
  }

  @media (max-width: 850px) {
    width: 300px;
    height: 300px;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  padding: 6px 0;
  background-color: #dddddd;
`;

const Title = styled.h3`
  margin: 5px 0;
  font-size: 1rem;
  text-align: center;
`;

const InfoConatiner = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: #ffffff;
`;

const LevelInfo = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  background-color: var(--primary-blue-dark-500);
  border-right: 0.5px solid #ffffff;
`;

const TypeInfo = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  background-color: var(--primary-blue-dark-500);
  border-left: 0.5px solid #ffffff;
`;

const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const PlayContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const WhiteCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #ffffff;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: conatin;
`;

function LessonBox({ lesson }) {
  const { titleEnglish, titleArabic, level, type, imageLink, video } = lesson;

  return (
    <Link to={`/learn/${replaceSpacesWithDashes(titleEnglish.toLowerCase())}`}>
      <StyledLessonBox>
        <TitleContainer>
          <Title>{titleEnglish}</Title>
          <Title>{titleArabic}</Title>
        </TitleContainer>
        <InfoConatiner>
          <LevelInfo>{level}</LevelInfo>
          <TypeInfo>{type}</TypeInfo>
        </InfoConatiner>
        <ImageContainer>
          {video && (
            <>
              <PlayContainer>
                <PlayCircleFilledIcon
                  sx={{
                    fontSize: 80,
                    color: '#aaaaaa',
                  }}
                />
              </PlayContainer>
              <WhiteCircle />
            </>
          )}
          <Image src={imageLink} alt={titleEnglish} />
        </ImageContainer>
      </StyledLessonBox>
    </Link>
  );
}

export default LessonBox;
