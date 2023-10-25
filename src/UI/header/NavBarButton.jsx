import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 0.75rem;
  letter-spacing: 2px;
  height: 50px;

  &:hover {
    border-bottom: 2.5px solid var(--primary-blue-500);
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
