import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Word = styled.h3`
  font-family: 'Anton', sans-serif;
  font-size: 2.25rem;
  color: var(--primary-blue-dark-500);
  margin: 0;
  letter-spacing: 7px;
`;

function Title() {
  return (
    <div>
      <Link to='/'>
        <Word>ARABIC ARENA</Word>
      </Link>
    </div>
  );
}

export default Title;
