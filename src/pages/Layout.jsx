import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../UI/footer/Footer';
import NavBar from '../UI/header/NavBar';
import styled from 'styled-components';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { useContext, useEffect } from 'react';
import { UserContext } from '../features/UserContext';
import { getFirstName, getLastName } from '../utility/stringOperations';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addUser, fetchUser } from '../services/userServices';
import NewUserModal from '../UI/NewUserModal';
import toast from 'react-hot-toast';
import { getLessonCount } from '../services/lessonService';
import { getQuizCount } from '../services/quizServices';

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
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { instance } = useMsal();
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const isAuthenticated = useIsAuthenticated();
  const account = isAuthenticated ? instance.getAllAccounts()[0] : null;
  const email = account?.username;
  const { data: fetchedUser, error } = useQuery({
    queryKey: ['user', email],
    queryFn: () => fetchUser(email),
    enabled: !!email || !user.language,
    retry: false,
  });
  const createUser = useMutation({
    mutationFn: (user) => addUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user', email],
      });
    },
  });

  const { data: lessonCount } = useQuery({
    queryKey: ['lessonCount'],
    queryFn: () => getLessonCount(),
  });
  const { data: quizCount } = useQuery({
    queryKey: ['quizCount'],
    queryFn: () => getQuizCount(),
  });

  useEffect(() => {
    if (fetchedUser) {
      setUser(fetchedUser);
    }
  }, [fetchedUser, setUser]);

  const handleSaveUser = (selectedLanguage) => {
    const newUser = {
      ...user,
      id: account.username,
      firstName: getFirstName(account.name),
      lastName: getLastName(account.name),
      language: selectedLanguage,
    };
    createUser.mutate(newUser);
    setUser(newUser);
    toast(
      (t) => (
        <span
          onClick={() => {
            toast.dismiss(t.id);
            navigate('/placement');
          }}
        >
          <span
            style={{
              fontSize: '30px',
              position: 'absolute',
              left: '10px',
            }}
          >
            ❗
          </span>
          We highly recommend that you take the placement test before starting.
        </span>
      ),
      {
        duration: 15000,
        style: {
          textAlign: 'center',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          paddingLeft: '40px',
          borderRadius: '5px',
        },
      }
    );
  };
  return (
    <>
      <NavBar />
      <AppWrapper>
        <Content>
          {
            <OutletContainer>
              <Outlet />
              {error && !user.language && (
                <NewUserModal
                  open={error && !user.language}
                  onSaveLanguage={handleSaveUser}
                  name={getFirstName(account.name)}
                />
              )}
            </OutletContainer>
          }
        </Content>
        {isAuthenticated ? <Footer /> : <Footer withAboutUs={false} />}
      </AppWrapper>
    </>
  );
}

export default Layout;
