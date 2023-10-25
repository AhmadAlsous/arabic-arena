import { Outlet } from 'react-router-dom';
import Footer from '../UI/Footer';
import NavBar from '../UI/header/NavBar';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

function Layout() {
  return (
    <AppWrapper>
      <Content>
        <NavBar />
        <Outlet />
      </Content>
      <Footer />
    </AppWrapper>
  );
}

export default Layout;
