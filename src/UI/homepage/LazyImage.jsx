import { useState } from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 610px;
  background: linear-gradient(to right, #7d98d6, #95bde6, #adddf2);

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  @media (max-width: 1420px) {
    min-height: 550px;
  }

  @media (max-width: 1105px) {
    min-height: 490px;
  }
`;

const TitleContainer = styled.div`
  margin-top: 50px;
  width: 85%;

  @media (max-width: 850px) {
    order: 2;
    margin-top: -30px;
  }
`;

const Title = styled.h1`
  font-family: 'Feather';
  font-size: 6rem;
  margin-left: 60px;
  letter-spacing: 7px;
  color: black;

  @media (max-width: 1420px) {
    font-size: 5rem;
  }

  @media (max-width: 1105px) {
    font-size: 4rem;
  }

  @media (max-width: 850px) {
    font-size: 2.5rem;
    text-align: center;
    margin-top: 0;
    margin-right: 60px;
  }

  @media (max-width: 540px) {
    font-size: 1.5rem;
    text-align: center;
    margin-top: 0;
    margin-right: 60px;
  }
`;

const Description = styled.p`
  font-family: 'Feather';
  font-size: 1.1rem;
  margin-left: 60px;
  line-height: 1.4;
  letter-spacing: 1px;
  color: #333;

  @media (max-width: 1105px) {
    font-size: 1rem;
  }

  @media (max-width: 850px) {
    font-size: 1rem;
    text-align: center;
    margin-top: 0;
    margin-bottom: 50px;
    margin-right: 60px;
  }

  @media (max-width: 540px) {
    font-size: 0.6rem;
    text-align: center;
    margin-top: 0;
    margin-bottom: 50px;
    margin-right: 60px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100%;
  overflow: hidden;
  background: transparent;
  margin-top: 50px;
`;

const StyledImg = styled.img`
  position: relative;
  width: 100%;
  height: auto;

  @media (max-width: 1420px) {
    height: 85%;
  }

  @media (max-width: 1105px) {
    height: 75%;
  }
`;

function LazyImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Grid>
      <TitleContainer>
        <Title>Arabic Arena</Title>
        <Description>
          A comprehensive learning platform dedicated to providing immersive and
          tailored Arabic language education, designed to cater to all
          proficiency levels, while ensureing an engaging journey for every
          student learning Arabic.
        </Description>
      </TitleContainer>
      <ImageContainer>
        <StyledImg
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s' }}
        />
      </ImageContainer>
    </Grid>
  );
}

export default LazyImage;
