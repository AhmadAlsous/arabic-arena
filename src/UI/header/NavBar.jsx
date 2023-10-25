import styled from 'styled-components';
import NavBarButton from './NavBarButton';
import Image from '../Image';
import SearchBar from './SearchBar';
import AccountCircleList from './AccountCircleList';

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin: 5px 18% 0 25px;
  width: 60%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    margin-right: 15%;
  }
`;

const SearchContainer = styled.div`
  max-width: 30%;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 5%;
  align-items: center;
  margin-top: 5px;
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
        <NavBarButton name='TABLES' navTo='/tables' />
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
