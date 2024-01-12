import { useState } from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  background: linear-gradient(to right, #7d98d6, #95bde6, #adddf2);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100%;
  overflow: hidden;
  background: transparent;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: transparent;

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
    <Grid>
      <div>Arabic Arena</div>
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
    </Grid>
  );
}

export default LazyImage;
