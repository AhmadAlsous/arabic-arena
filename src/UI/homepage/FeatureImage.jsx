import { useState } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  width: 55%;
  height: 350px;
  overflow: hidden;
  background-color: white;

  @media (max-width: 1300px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    height: 350px;
    width: 60%;
    padding-bottom: 80px;
  }

  @media (max-width: 700px) {
    height: 300px;
  }

  @media (max-width: 550px) {
    height: 250px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 95%;
  background-color: white;
`;

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function FeatureImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <ImageContainer>
      <ImageWrapper>
        <StyledImg
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s' }}
        />
      </ImageWrapper>
    </ImageContainer>
  );
}

export default FeatureImage;
