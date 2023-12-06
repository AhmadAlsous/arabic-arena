import { NavLinkReset } from '../../utility/LinkReset';
import styled from 'styled-components';

const StyledButton = styled(NavLinkReset)`
  height: 27px;
  position: relative;
  display: inline-block;

  @media (max-width: 1050px) {
    font-size: 0.75rem;
    letter-spacing: 2px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2.5px;
    transition: width 0.4s;
    bottom: -5px;
    left: -2.5%;
    background-color: var(--primary-blue-500);
  }

  &:hover:not(.active)::after,
  &.active::after {
    width: 105%;
  }

  transition: transform 0.5s;

  &:hover:not(.active) {
    color: black;
  }

  &.active::after {
    background-color: var(--primary-blue-500);
  }
`;

const Button = styled.div`
  font-size: 1rem;
  letter-spacing: 1px;
`;

function NavBarButton({ name, navTo }) {
  return (
    <StyledButton
      to={navTo}
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      <Button>{name}</Button>
    </StyledButton>
  );
}

export default NavBarButton;
