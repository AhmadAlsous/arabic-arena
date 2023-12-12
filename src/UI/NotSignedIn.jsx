import { useMsal } from '@azure/msal-react';
import { Button } from '@mui/material';
import styled from 'styled-components';
import { loginRequest } from '../services/authConfig';

const Bar = styled.div`
  padding: 30px 0;
  border-bottom: 1.5px solid #888888;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 6px;
  margin: 0;
`;

const TextContainer = styled.div`
  margin: 60px 0;
  padding: 0 50px 20px 50px;
  font-size: 1.2rem;
  text-align: center;
  letter-spacing: 1px;
  line-height: 1.5;
  border-bottom: 1.5px solid #888888;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -35px;
  margin-bottom: 10px;
`;

function NotSignedIn() {
  const { instance } = useMsal();
  function login() {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  }
  return (
    <>
      <Bar>
        <Title>SOMETHING WENT WRONG</Title>
      </Bar>
      <TextContainer>
        <p>
          It looks like you're trying to access the website without being signed
          in.
        </p>
        <p>
          We're excited to have you explore all that we offer, but first, let's
          get you signed in!
        </p>
      </TextContainer>
      <ButtonContainer>
        <Button sx={{ fontSize: '20px' }} onClick={login}>
          Sign in now
        </Button>
      </ButtonContainer>
    </>
  );
}

export default NotSignedIn;
