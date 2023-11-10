import styled from 'styled-components';

const StyledTitle = styled.h3`
  font-family: 'Anton', sans-serif;
  font-size: 2.5rem;
  color: #fffdf2;
  margin: 0;
  letter-spacing: 9px;
`;

function Title() {
  return <StyledTitle>ARABIC ARENA</StyledTitle>;
}

export default Title;
