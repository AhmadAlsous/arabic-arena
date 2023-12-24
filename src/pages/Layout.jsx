import { Outlet, useLocation } from "react-router-dom";
import Footer from "../UI/footer/Footer";
import NavBar from "../UI/header/NavBar";
import styled from "styled-components";
import { useIsAuthenticated } from "@azure/msal-react";

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
  background-color: #f0f0f0;
  margin: 50px 15%;
  padding: 0 50px 20px 50px;
  box-shadow: 0 5px 20px 3px black;

  @media (max-width: 757px) {
    margin: 0;
    padding-top: 20px;
    background-color: white;
    box-shadow: 0 0 0 0 white;
    border: none;
  }
`;

function Layout() {
  const isAuthenticated = useIsAuthenticated();
  const location = useLocation();
  const hasSearchBar =
    location.pathname === "/learn" || location.pathname === "/quiz";
  return (
    <AppWrapper>
      <Content>
        <NavBar hasSearchBar={hasSearchBar} />
        {
          <OutletContainer>
            <Outlet />
          </OutletContainer>
        }
      </Content>
      {isAuthenticated ? <Footer /> : <Footer withAboutUs={false} />}
    </AppWrapper>
  );
}

export default Layout;
