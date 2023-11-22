import { useState } from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';
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

function PlacementTest() {
  const [startTest, setStartTest] = useState(false);

  return startTest ? (
    <Quiz isPlacement={true} />
  ) : (
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
          The test consists of 30 questions. You will have 30 minutes to
          complete it.
        </p>
      </TextContainer>
      <ButtonContainer>
        <Button sx={{ fontSize: '18px' }} onClick={() => setStartTest(true)}>
          Start Placement Test
        </Button>
      </ButtonContainer>
    </>
  );
}

export default PlacementTest;
