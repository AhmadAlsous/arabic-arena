import styled from 'styled-components';
import Logos from './Logos';

const StyledNavBar = styled.div`
  display: flex;
`;

function NavBar() {
  return (
    <StyledNavBar>
      <Logos />
    </StyledNavBar>
  );
}

export default NavBar;
