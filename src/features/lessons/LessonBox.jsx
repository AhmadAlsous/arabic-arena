import { useState } from 'react';
import { LinkReset } from '../../utility/LinkReset';
import { replaceSpacesWithDashes } from '../../utility/stringOperations';
import styled from 'styled-components';
import SvgColor from '../../UI/svg-color';

const StyledLessonBox = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 10px 2px #bbb;
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

const StyledCheckIcon2 = styled(SvgColor)`
  position: absolute;
  color: #44bd22;
  top: -15px;
  left: -7px;
`;

const TitleContainer = styled.div`
  width: 100%;
  padding: 6px 0 2px 0;
  background-color: #dddddd;
`;

const Title = styled.h3`
  margin: 7px 0;
  font-size: 1rem;
  text-align: center;
  font-family: 'Feather';
`;

const Arabic = styled.span`
  font-family: 'Al-Jazeera';
  font-size: 1.15rem;
  text-align: center;
  display: block;
  margin: -5px 0 -8px 0;
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

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

function LessonBox({ lesson }) {
  const { id, titleEnglish, titleArabic, level, type, imageLink } = lesson;
  const [imageLoaded, setImageLoaded] = useState(!!imageLink);

  return (
    <LinkReset
      to={`/learn/${replaceSpacesWithDashes(titleEnglish.toLowerCase())}`}
      state={{ id }}
    >
      <StyledLessonBox>
        <StyledCheckIcon2 src='/images/check.svg' />
        <TitleContainer>
          <Title>
            <Arabic>{titleArabic}</Arabic>
          </Title>
          <Title>{titleEnglish}</Title>
        </TitleContainer>
        <InfoConatiner>
          <LevelInfo type={type}>{level}</LevelInfo>
          <TypeInfo>{type}</TypeInfo>
        </InfoConatiner>
        <ImageContainer>
          {imageLoaded ? (
            <Image
              onError={() => setImageLoaded(false)}
              src={imageLink}
              alt={titleEnglish}
            />
          ) : (
            <TitleImageContainer>{titleArabic}</TitleImageContainer>
          )}
        </ImageContainer>
      </StyledLessonBox>
    </LinkReset>
  );
}

export default LessonBox;
