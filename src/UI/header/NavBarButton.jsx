import { NavLinkReset } from '../../utility/LinkReset';
import styled from 'styled-components';

const StyledButton = styled(NavLinkReset)`
  border: none;
  background-color: transparent;
  font-size: 0.85rem;
  letter-spacing: 3px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1050px) {
    font-size: 0.75rem;
    letter-spacing: 2px;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-51%);
    width: 100%;
    height: 2.5px;
    background-color: transparent;
    transition: background-color 0.5s;
  }

  &:hover:not(.active)::before {
    background-color: var(--primary-blue-500);
  }

  transition: transform 0.5s;

  &:hover:not(.active) {
    transform: translateY(-3px);
  }

  &.active {
    font-weight: bold;
    border-bottom: 2px solid var(--primary-blue-500);
  }
`;

function NavBarButton({ name, navTo }) {
  return (
    <StyledButton
      to={navTo}
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      {name}
    </StyledButton>
  );
}

export default NavBarButton;
