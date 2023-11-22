import { LinkReset } from '../../utility/LinkReset';
import { replaceSpacesWithDashes } from '../../utility/stringOperations';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import styled from 'styled-components';

const StyledLessonBox = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-family: 'Feather';
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
  letter-spacing: 1px;
  background-color: var(--primary-blue-dark-500);
  font-family: 'Din-round';
  border-right: ${(props) => props.type && '0.5px solid #ffffff'};
`;

const TypeInfo = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  letter-spacing: 1px;
  background-color: var(--primary-blue-dark-500);
  font-family: 'Din-round';
  border-left: 0.5px solid #ffffff;
`;

const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #3aafa9;
`;

const TitleImageContainer = styled.div`
  padding: 0 15%;
  font-family: 'Arabic-bold', sans-serif;
  letter-spacing: 1px;
  text-align: center;
  font-size: 2.5rem;
  opacity: 0.35;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 1157px) {
    font-size: 4rem;
  }

  @media (max-width: 940px) {
    font-size: 3rem;
  }

  @media (max-width: 850px) {
    font-size: 2.5rem;
  }
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
`;

function LessonBox({ lesson }) {
  const { id, titleEnglish, titleArabic, level, type, imageLink, video } =
    lesson;

  return (
    <LinkReset
      to={`/learn/${replaceSpacesWithDashes(titleEnglish.toLowerCase())}`}
      state={{ id }}
    >
      <StyledLessonBox>
        <TitleContainer>
          <Title>{titleEnglish}</Title>
          <Title>{titleArabic}</Title>
        </TitleContainer>
        <InfoConatiner>
          <LevelInfo type={type}>{level}</LevelInfo>
          <TypeInfo>{type}</TypeInfo>
        </InfoConatiner>
        <ImageContainer>
          {video && (
            <>
              <PlayContainer>
                <PlayCircleFilledIcon
                  sx={{
                    fontSize: 80,
                    color: '#999999',
                  }}
                />
              </PlayContainer>
              <WhiteCircle />
            </>
          )}
          {imageLink ? (
            <Image src={imageLink} alt={titleEnglish} />
          ) : (
            <TitleImageContainer>{titleArabic}</TitleImageContainer>
          )}
        </ImageContainer>
      </StyledLessonBox>
    </LinkReset>
  );
}

export default LessonBox;
