import styled from 'styled-components';
import Logo from './Logo';
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
      <Logo
        imageLink='../../images/logos/UniversityOfJordanLogo.svg.png'
        href='https://www.ju.edu.jo/'
        alt='University of Jordan Logo'
      />
      <Title />
      <Logo
        imageLink='../../images/logos/LanguageCenterLogo.png'
        href='https://centers.ju.edu.jo/ar/ujlc/'
        alt='Language Center Logo'
      />
    </StyledLogos>
  );
}

export default Logos;
