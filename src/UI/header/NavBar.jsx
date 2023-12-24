import styled from 'styled-components';
import NavBarButton from './NavBarButton';
import Image from '../footer/Image';
import SearchBar from './SearchBar';
import AccountCircleList from './AccountCircleList';
import MobileMenu from './MobileMenu';

const StyledNavBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background-color: ${(props) =>
    props.$isHomepage ? 'var(--homepage-blue)' : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(15px);
  box-shadow: ${(props) =>
    props.$isHomepage ? 'none' : '0 3px 20px 4px black'};

  @media (max-width: 757px) {
    background-color: var(--homepage-blue);
    box-shadow: ${(props) =>
      props.$isHomepage ? 'none' : '0 3px 20px 4px #555'};
  }
`;

const ImageContainer = styled.div`
  margin-left: 15px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin: 0 18% 0 25px;
  width: 45%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    margin-right: 7%;
    width: 75%;
  }

  @media (max-width: 757px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  padding-right: 50px;
  max-width: 30%;
`;

const ProfileContainer = styled.div`
  margin-top: 5px;
  padding-right: 15px;

  @media (max-width: 757px) {
    display: none;
  }
`;
const MobileContainer = styled.div`
  margin-top: 5px;
  padding-right: 15px;
  display: none;

  @media (max-width: 757px) {
    display: block;
  }
`;

function NavBar({ isHomepage = false, hasSearchBar = false }) {
  return (
    <StyledNavBar $isHomepage={isHomepage}>
      <ImageContainer>
        <Image
          imageLink='../../images/logos/LanguageCenterLogo.png'
          alt='Languages Center Logo'
        />
      </ImageContainer>
      <ButtonsContainer>
        <NavBarButton isHomepage={isHomepage} name='HOME' navTo='/' />
        <NavBarButton isHomepage={isHomepage} name='LESSONS' navTo='/learn' />
        <NavBarButton isHomepage={isHomepage} name='QUIZZES' navTo='/quiz' />
        <NavBarButton
          isHomepage={isHomepage}
          name='PLACEMENT'
          navTo='/placement'
        />
        {/* <NavBarButton name='ASK' navTo='/ask' /> */}
      </ButtonsContainer>
      {hasSearchBar && (
        <SearchContainer>
          <SearchBar />
        </SearchContainer>
      )}
      <ProfileContainer>
        <AccountCircleList isHomepage={isHomepage} />
      </ProfileContainer>
      <MobileContainer>
        <MobileMenu />
      </MobileContainer>
    </StyledNavBar>
  );
}

export default NavBar;
