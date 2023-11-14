import styled from 'styled-components';
import Image from '../footer/Image';
import Title from './Title';
import MainPageButton from './MainPageButton';

const StyledHomePageBar = styled.div`
  display: flex;
  flex: 1;
  padding: 10px 30px 10px 25px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--homepage-blue);
`;

function HomePageBar() {
  return (
    <StyledHomePageBar>
      <Image
        imageLink='../../images/logos/LanguageCenterLogo.png'
        href='https://centers.ju.edu.jo/ar/ujlc/'
        alt='Language Center Logo'
      />
      <Title />
      <MainPageButton />
    </StyledHomePageBar>
  );
}

export default HomePageBar;
