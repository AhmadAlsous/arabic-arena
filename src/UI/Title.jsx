import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Arabic = styled.h3`
  font-family: 'Anton', sans-serif;
  font-size: 1.75rem;
  color: var(--primary-blue-dark-500);
  margin: 0;
  letter-spacing: 3px;
  position: relative;
  bottom: -5px;
`;

const Arena = styled.h3`
  font-family: 'Anton', sans-serif;
  font-size: 1.75rem;
  color: var(--primary-blue-dark-500);
  margin: 0;
  letter-spacing: 3px;
  position: relative;
  left: 20px;
  bottom: 5px;
`;

function Title() {
  return (
    <div>
      <Link to='/'>
        <Arabic>ARABIC</Arabic>
        <Arena>ARENA</Arena>
      </Link>
    </div>
  );
}

export default Title;
