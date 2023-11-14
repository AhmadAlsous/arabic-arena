import styled from 'styled-components';
import NavBarButton from './NavBarButton';
import Image from '../footer/Image';
import SearchBar from './SearchBar';
import AccountCircleList from './AccountCircleList';

const StyledNavBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background-color: #ffffff;
  box-shadow: 0 3px 20px 4px black;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin: 0 18% 0 25px;
  width: 50%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    margin-right: 15%;
  }
`;

const SearchContainer = styled.div`
  padding-right: 50px;
  max-width: 30%;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  padding-right: 25px;
`;

function NavBar() {
  return (
    <StyledNavBar>
      <ButtonsContainer>
        <Image
          imageLink='../../images/logos/LanguageCenterLogo.png'
          alt='Languages Center Logo'
        />
        <NavBarButton name='HOME' navTo='/' />
        <NavBarButton name='LESSONS' navTo='/learn' />
        <NavBarButton name='QUIZZES' navTo='/quiz' />
        <NavBarButton name='PLACEMENT' navTo='/placement' />
        <NavBarButton name='ASK' navTo='/ask' />
      </ButtonsContainer>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <ProfileContainer>
        <AccountCircleList />
      </ProfileContainer>
    </StyledNavBar>
  );
}

export default NavBar;
