import { Button } from '@mui/material';
import styled from 'styled-components';
import { DummyPlacement } from '../data/DummyPlacement';
import { Link } from 'react-router-dom';
import Quiz from './quiz/Quiz';

const Bar = styled.div`
  padding: 30px;
  text-align: center;
  letter-spacing: 3px;
  font-size: 1.4rem;
  border-bottom: 1px solid black;
`;

const TextContainer = styled.div`
  padding: 40px 15%;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 0.3px;
  font-size: 1.2rem;
`;

const ButtonContainer = styled.div`
  border-top: 1px solid black;
  padding: 20px 0 10px 0;
  text-align: center;
`;

function Placement() {
  const hasTakenPlacementTest = localStorage.getItem('placement');
  if (hasTakenPlacementTest) {
    return <Quiz isPlacement={true} results={true} />;
  }

  return (
    <>
      <Bar>PLACEMENT TEST</Bar>
      <TextContainer>
        <p>
          This is a placement test. It will help us determine your current level
          of Arabic.
        </p>
        <p>
          After you complete the test, you will be classified into one of the
          following levels: Beginner, Intermediate, or Advanced.
        </p>
        <p>
          The test consists of {DummyPlacement.questions.length} questions. You
          will have {DummyPlacement.time} minutes to complete it.
        </p>
      </TextContainer>
      <ButtonContainer>
        <Link to='/placement/test'>
          <Button sx={{ fontSize: '18px' }}>Start Placement Test</Button>
        </Link>
      </ButtonContainer>
    </>
  );
}

export default Placement;
