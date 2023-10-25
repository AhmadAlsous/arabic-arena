import styled from 'styled-components';
import Image from './Image';
import Title from './Title';

const StyledLogos = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-green-900);
`;

function Logos() {
  return (
    <StyledLogos>
      <Image
        imageLink='../../images/logos/UniversityOfJordanLogo.svg.png'
        href='https://www.ju.edu.jo/'
        alt='University of Jordan Logo'
      />
      <Title />
      <Image
        imageLink='../../images/logos/LanguageCenterLogo.png'
        href='https://centers.ju.edu.jo/ar/ujlc/'
        alt='Language Center Logo'
      />
    </StyledLogos>
  );
}

export default Logos;
