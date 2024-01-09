import { Button, Stack } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Quiz from './quiz/Quiz';
import { fetchPlacementTest } from '../services/quizServices';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../UI/Spinner';
import { UserContext } from './UserContext';
import { useContext } from 'react';

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

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 5px;

  @media (max-width: 500px) {
    font-size: 1.2rem;
    letter-spacing: 3px;
  }
`;

function Placement() {
  const { user } = useContext(UserContext);
  const { data, isLoading } = useQuery({
    queryKey: ['placement'],
    queryFn: fetchPlacementTest,
    enabled: !user.level,
  });
  const hasTakenPlacementTest = localStorage.getItem('1');
  if (hasTakenPlacementTest || user.level) {
    return <Quiz isPlacement={true} results={true} />;
  }

  return (
    <>
      {isLoading && (
        <Stack justifyContent='center' alignItems='center' height={400}>
          <Spinner />
        </Stack>
      )}
      {!isLoading && (
        <>
          <Bar>PLACEMENT TEST</Bar>
          <TextContainer>
            <p>
              This is a placement test. It will help us determine your current
              level of Arabic.
            </p>
            <p>
              After you complete the test, you will be classified into one of
              the following levels: Beginner, Intermediate, or Advanced.
            </p>
            <p>
              The test consists of {data.questions.length} questions. You will
              have {data.time} minutes to complete it.
            </p>
          </TextContainer>
          <ButtonContainer>
            <Link to='/placement/test'>
              <Button sx={{ fontSize: '18px' }}>Start Placement Test</Button>
            </Link>
          </ButtonContainer>
        </>
      )}
    </>
  );
}

export default Placement;
