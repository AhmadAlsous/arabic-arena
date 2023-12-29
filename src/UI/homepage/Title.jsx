import styled from 'styled-components';

const StyledTitle = styled.h3`
  font-family: 'Din-round';
  font-size: 2.3rem;
  color: #fffdf2;
  margin: 0;
  letter-spacing: 15px;

  @media (max-width: 750px) {
    font-size: 1.5rem;
    letter-spacing: 10px;
  }

  @media (max-width: 550px) {
    font-size: 1rem;
    letter-spacing: 5px;
  }
`;

function Title() {
  return <StyledTitle>ARABIC ARENA</StyledTitle>;
}

export default Title;
