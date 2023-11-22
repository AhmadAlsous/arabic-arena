import styled from 'styled-components';

const StyledQuizBox = styled.div`
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
  border-right: ${(props) => props.type && '0.5px solid #ffffff'};
`;

const TypeInfo = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  letter-spacing: 1px;
  background-color: var(--primary-blue-dark-500);
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
    font-size: 2.8rem;
  }

  @media (max-width: 850px) {
    font-size: 2.5rem;
  }
`;

function QuizBox({ quiz }) {
  const { titleEnglish, titleArabic, quizLevel, quizType } = quiz;

  return (
    <StyledQuizBox>
      <TitleContainer>
        <Title>{titleEnglish}</Title>
        <Title>{titleArabic}</Title>
      </TitleContainer>
      <InfoConatiner>
        <LevelInfo type={quizType}>{quizLevel}</LevelInfo>
        <TypeInfo>{quizType}</TypeInfo>
      </InfoConatiner>
      <ImageContainer>
        <TitleImageContainer>{titleArabic}</TitleImageContainer>
      </ImageContainer>
    </StyledQuizBox>
  );
}

export default QuizBox;
