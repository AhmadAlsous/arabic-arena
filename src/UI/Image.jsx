import styled from 'styled-components';

const Img = styled.img`
  height: ${(props) => props.height || '60px'};
`;

function Image({ imageLink, href, alt, height }) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      <Img src={imageLink} alt={alt} height={height} />
    </a>
  );
}

export default Image;
