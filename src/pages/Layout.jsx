import { Outlet } from 'react-router-dom';
import Footer from '../UI/footer/Footer';
import NavBar from '../UI/header/NavBar';
import styled from 'styled-components';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { useContext, useEffect } from 'react';
import { UserContext } from '../features/UserContext';
import { getFirstName, getLastName } from '../utility/stringOperations';
import { useMutation, useQuery } from '@tanstack/react-query';
import { addUser, fetchUser } from '../services/userServices';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Content = styled.div`
  flex: 1;
  background-color: var(--homepage-blue);
  overflow-x: hidden;
`;

const OutletContainer = styled.div`
  background-color: #f0f0f0;
  margin: 50px 15%;
  padding: 0 50px 20px 50px;
  box-shadow: 0 5px 20px 3px black;
  overflow-x: hidden;

  @media (max-width: 1300px) {
    margin: 50px 10%;
  }

  @media (max-width: 1000px) {
    padding: 0 30px 20px 30px;
    margin: 50px 8%;
  }

  @media (max-width: 757px) {
    margin: 0;
    padding-top: 20px;
    background-color: white;
    box-shadow: 0 0 0 0 white;
    border: none;
  }

  @media (max-width: 500px) {
    padding: 0 10px 20px 10px;
  }
`;

function Layout() {
  const createUser = useMutation({
    mutationFn: (user) => addUser(user),
  });
  const { instance } = useMsal();
  const { user, setUser } = useContext(UserContext);
  const isAuthenticated = useIsAuthenticated();
  const account = isAuthenticated ? instance.getAllAccounts()[0] : null;
  const email = account?.username;
  const { data, error } = useQuery({
    queryKey: ['user', email],
    queryFn: () => fetchUser(email),
    enabled: !!email,
  });
  useEffect(() => {
    if (error) {
      const newUser = {
        ...user,
        id: account.username,
        firstName: getFirstName(account.name),
        lastName: getLastName(account.name),
      };
      createUser.mutate(newUser);
      setUser(newUser);
    } else if (data) {
      setUser(data);
    }
  }, [data, error]);
  return (
    <>
      <NavBar />
      <AppWrapper>
        <Content>
          {
            <OutletContainer>
              <Outlet />
            </OutletContainer>
          }
        </Content>
        {isAuthenticated ? <Footer /> : <Footer withAboutUs={false} />}
      </AppWrapper>
    </>
  );
}

export default Layout;
