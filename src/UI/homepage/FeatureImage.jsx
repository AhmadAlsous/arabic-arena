import { useState } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  width: 55%;
  height: 400px;
  overflow: hidden;
  background-color: #f0f0f0;

  @media (max-width: 1300px) {
    width: 70%;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    height: 300px;
    width: 60%;
    padding-bottom: 80px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 95%;
  background-color: #f0f0f0;
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
