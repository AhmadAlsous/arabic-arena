import { Button } from '@mui/material';
import { LinkReset } from '../../utility/LinkReset';
import styled from 'styled-components';
import {
  getPercentage,
  getPlacement,
  getResult,
} from '../../utility/quizCalculations';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from '../../UI/Modal';
import { UserContext } from '../UserContext';
import { useContext } from 'react';

const StyledQuizResults = styled.div`
  margin: 40px 10%;
  padding: 20px 25px 15px 25px;
  border: 1px solid #bbb;
  box-shadow: 0px 2px 20px 3px #d9d9d9;
  background-color: #fff;

  @media (max-width: 1200px) {
    margin: 20px 3% 40px 3%;
  }

  @media (max-width: 757px) {
    border: none;
    padding: 20px 10px 15px 10px;
    box-shadow: none;
  }

  @media (max-width: 600px) {
    margin: 20px 0 40px 0;
  }
`;

const QuizHeader = styled.div`
  font-size: 1.4rem;
  letter-spacing: 2px;
  padding: 10px 0 20px 0;
  text-align: center;
  border-bottom: 1px solid #999;

  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }

  @media (max-width: 757px) {
    padding-top: 17px;
    border-top: 1px solid #999;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const ResultsContainer = styled.div`
  margin: 50px 0;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.1rem;
  margin: 0 0 10px 0;
  letter-spacing: 1px;

  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

const Number = styled.p`
  font-size: 2.5rem;
  margin: 25px 0 0 0;
  letter-spacing: 2px;
  margin-bottom: ${(props) => (props.$isPlacement ? '25px' : '0')};

  @media (max-width: 1200px) {
    font-size: 2.2rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Class = styled.p`
  font-size: 1.7rem;
  margin: 10px 0 0 0;
  letter-spacing: 2px;

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid #999;
  padding: 10px 0 0 0;

  @media (max-width: 757px) {
    padding-bottom: 13px;
    border-bottom: 1px solid #999;
  }
`;

const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 11px 0 0 0;
  letter-spacing: 1.5px;
`;

const ConfirmTextContainer = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  margin: 30px;
  text-align: center;
`;

const ConfirmText = styled.p`
  margin: 0;
  letter-spacing: 0.5px;
`;

function QuizResults({
  quizId,
  isPlacement,
  setIsAnswerChecked,
  questions,
  answers,
  setAnswers,
  intermediate,
  advanced,
}) {
  const navigate = useNavigate();
  const { quiz } = useParams();
  const { user } = useContext(UserContext);

  const handleReview = () => {
    setIsAnswerChecked(true);
    navigate(`/quiz/${quiz}/review`);
  };

  const handleTryAgain = () => {
    setIsAnswerChecked(false);
    setAnswers(Array.from({ length: questions.length }, () => []));
    localStorage.removeItem(`${quiz}-answers`);
    localStorage.removeItem(quizId);
    navigate(`/quiz/${quiz}`);
  };

  const hasSavedAnswers = isPlacement
    ? localStorage.getItem('placement-answers')
    : localStorage.getItem(`${quiz}-answers`);
  const studentLevel = user.level
    ? user.level
    : getPlacement(
        getPercentage(getResult(questions, answers), questions.length),
        intermediate,
        advanced
      );

  return (
    <StyledQuizResults>
      <QuizHeader>
        {isPlacement ? 'Placement Results' : 'Quiz Results'}
      </QuizHeader>
      <ResultsContainer>
        {hasSavedAnswers ? (
          <>
            <Text>
              You answered {getResult(questions, answers)} / {questions.length}{' '}
              questions right,
            </Text>
            <Text>which is a score of</Text>
            <Number $isPlacement={isPlacement}>
              {getPercentage(getResult(questions, answers), questions.length)}%
            </Number>
          </>
        ) : (
          <Text>You have already completed this quiz.</Text>
        )}
        {isPlacement && (
          <>
            <Text>You have been placed at</Text>
            <Class>{studentLevel}</Class>
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
            <Button>Back</Button>
          </LinkReset>
        )}
        {!isPlacement && (
          <Modal
            btn='Try Again'
            onSubmit={handleTryAgain}
            trigger={<Button>Try Again</Button>}
          >
            <ConfirmContainer>
              <Title>Confirmation</Title>
              <ConfirmTextContainer>
                <ConfirmText>
                  Are you sure you want to try this quiz again?
                </ConfirmText>
                <ConfirmText>
                  Your previous answers will be deleted.
                </ConfirmText>
              </ConfirmTextContainer>
            </ConfirmContainer>
          </Modal>
        )}
        {!isPlacement && hasSavedAnswers && (
          <Button onClick={handleReview}>Review</Button>
        )}
      </ButtonsContainer>
    </StyledQuizResults>
  );
}

export default QuizResults;
