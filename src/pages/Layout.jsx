import { Outlet } from 'react-router-dom';
import Footer from '../UI/footer/Footer';
import NavBar from '../UI/header/NavBar';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  background-color: var(--homepage-blue);
`;

const OutletContainer = styled.div`
  background-color: #ffffff;
  margin: 50px 15%;
  padding: 0 50px 20px 50px;
  box-shadow: 0 5px 20px 3px black;
`;

function Layout() {
  return (
    <AppWrapper>
      <Content>
        <NavBar />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Content>
      <Footer />
    </AppWrapper>
  );
}

export default Layout;
