import styled from 'styled-components';

const Img = styled.img`
  height: ${(props) => props.height || '60px'};

  @media (max-width: 750px) {
    width: 40px;
    height: auto;
  }

  @media (max-width: 550px) {
    width: 35px;
    height: auto;
  }
`;

function Image({ imageLink, href, alt, height }) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      <Img src={imageLink} alt={alt} height={height} />
    </a>
  );
}

export default Image;
