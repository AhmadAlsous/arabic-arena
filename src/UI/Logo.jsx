import styled from 'styled-components';

const Img = styled.img`
  height: 100px;
`;

function Logo({ imageLink, href, alt }) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      <Img src={imageLink} alt={alt} />
    </a>
  );
}

export default Logo;
