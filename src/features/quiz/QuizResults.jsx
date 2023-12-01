import { Button } from '@mui/material';
import { LinkReset } from '../../utility/LinkReset';
import styled from 'styled-components';
import {
  getPercentage,
  getPlacement,
  getResult,
} from '../../utility/quizCalculations';
import { useNavigate, useParams } from 'react-router-dom';

const StyledQuizResults = styled.div`
  margin: 40px 10%;
  padding: 20px 25px 15px 25px;
  border: 1px solid #bbb;
  box-shadow: 0px 2px 20px 3px #d9d9d9;
  background-color: #fff;
`;

const QuizHeader = styled.div`
  font-size: 1.4rem;
  letter-spacing: 2px;
  padding: 10px 0 20px 0;
  text-align: center;
  border-bottom: 1px solid #999;
`;

const ResultsContainer = styled.div`
  margin: 50px 0;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.1rem;
  margin: 0 0 10px 0;
  letter-spacing: 1px;
`;

const Number = styled.p`
  font-size: 2.5rem;
  margin: 25px 0 0 0;
  letter-spacing: 2px;
  margin-bottom: ${(props) => (props.$isPlacement ? '25px' : '0')};
`;

const Class = styled.p`
  font-size: 1.7rem;
  margin: 10px 0 0 0;
  letter-spacing: 2px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  border-top: 1px solid #999;
  padding: 10px 0 0 0;
`;

function QuizResults({ isPlacement, setIsAnswerChecked, questions, answers }) {
  const navigate = useNavigate();
  const { quiz } = useParams();

  const handleClick = () => {
    setIsAnswerChecked(true);
    navigate(isPlacement ? `/placement/review` : `/quiz/${quiz}/review`);
  };

  const numCorrectAnswers = getResult(questions, answers);
  const percentage = getPercentage(numCorrectAnswers, questions.length);

  return (
    <StyledQuizResults>
      <QuizHeader>
        {isPlacement ? 'Placement Results' : 'Quiz Results'}
      </QuizHeader>
      <ResultsContainer>
        <Text>
          You answered {numCorrectAnswers} / {questions.length} questions right,
        </Text>
        <Text>which is a score of</Text>
        <Number $isPlacement={isPlacement}>{percentage}%</Number>
        {isPlacement && (
          <>
            <Text>You have been placed at</Text>
            <Class>{getPlacement(percentage)}</Class>
          </>
        )}
      </ResultsContainer>
      <ButtonsContainer>
        {isPlacement ? (
          <LinkReset to='/learn'>
            <Button>Start Learning</Button>
          </LinkReset>
        ) : (
          <LinkReset to='/quiz'>
            <Button>Back to Quizzes</Button>
          </LinkReset>
        )}
        <Button onClick={handleClick}>Review</Button>
      </ButtonsContainer>
    </StyledQuizResults>
  );
}

export default QuizResults;
