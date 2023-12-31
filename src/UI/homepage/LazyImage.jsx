import { useState } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 20px 0;
  width: 100%;
  overflow: hidden;
  background-color: var(--homepage-grey);
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 90%;
  background-color: var(--homepage-grey);

  &::before {
    content: '';
    display: block;
    padding-top: 41.713169%;
  }
`;

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function LazyImage({ src, alt }) {
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

export default LazyImage;
