import styled from 'styled-components';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../../config/authConfig';

const StyledMainPageButton = styled.button`
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 1.15rem;
  letter-spacing: 3px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 750px) {
    font-size: 1rem;
    letter-spacing: 2px;
  }

  @media (max-width: 550px) {
    font-size: 0.8rem;
    letter-spacing: 2px;
  }

  span.glow-word {
    position: relative;
    z-index: 1;
    overflow: hidden;
    color: #ffffff;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(
      to right,
      rgba(128, 128, 128, 0.8),
      rgba(255, 255, 255, 0.8),
      rgba(128, 128, 128, 0.8)
    );
    background-size: 200% 100%;
    animation: glowEffect 7s infinite;
  }

  @keyframes glowEffect {
    0%,
    70% {
      background-position: -150% 0;
      color: #ffffff;
    }
    85% {
      background-position: 150% 0;
      color: transparent;
    }
    100% {
      background-position: 150% 0;
      color: #ffffff;
    }
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-51%);
    width: 70%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.5s;
  }

  &:hover::before {
    background-color: #ffffff;
  }

  transition: transform 0.5s;

  &:hover {
    transform: translateY(-2px);
  }
`;

function MainPageButton() {
  const { instance } = useMsal();
  function login() {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  }

  return (
    <StyledMainPageButton onClick={login}>
      <span className='glow-word'>LOG IN</span>
    </StyledMainPageButton>
  );
}

export default MainPageButton;
