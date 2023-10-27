import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 0.85rem;
  letter-spacing: 3px;
  height: 40px;
  position: relative;

  @media (max-width: 1050px) {
    font-size: 0.75rem;
    letter-spacing: 2px;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 2.5px;
    background-color: transparent;
    transition: background-color 0.5s;
  }

  &:hover::before {
    background-color: var(--primary-blue-500);
  }

  transition: transform 0.5s;

  &:hover {
    transform: translateY(-3px);
  }
`;

function NavBarButton({ name, navTo }) {
  return (
    <Link to={navTo}>
      <StyledButton>{name}</StyledButton>
    </Link>
  );
}

export default NavBarButton;
