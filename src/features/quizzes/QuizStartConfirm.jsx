import styled from 'styled-components';
import QuizBox from './QuizBox';
import { LinkReset } from '../../utility/LinkReset';
import { replaceSpacesWithDashes } from '../../utility/stringOperations';
import Modal from '../../UI/Modal';
import { Button } from '@mui/material';
import { UserContext } from '../UserContext';
import { useContext } from 'react';

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

const ConfirmText = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  margin: 30px;
  text-align: center;
`;

const Text = styled.p`
  margin: 0;
  letter-spacing: 0.5px;
`;

const NoneButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

function QuizStartConfirm({ quiz }) {
  const { user } = useContext(UserContext);
  const firstTime =
    user.completedQuizzes.filter(
      (completedQuiz) => completedQuiz.id === quiz.id
    ).length === 0;

  return (
    <Modal
      trigger={
        <NoneButton>
          <QuizBox quiz={quiz} />
        </NoneButton>
      }
      navButton={
        <LinkReset
          to={`/quiz/${replaceSpacesWithDashes(
            quiz.titleEnglish.toLowerCase()
          )}`}
        >
          <Button variant='contained'>Start</Button>
        </LinkReset>
      }
    >
      <ConfirmContainer>
        <Title>Confirmation</Title>
        <ConfirmText>
          <Text>
            Are you sure you want to{' '}
            {firstTime ? 'start this quiz?' : 'take this quiz again?'}
          </Text>
          <Text>Time limit: {quiz.time} mins</Text>
          <Text>Number of questions: {quiz.questionsCount}</Text>
        </ConfirmText>
      </ConfirmContainer>
    </Modal>
  );
}

export default QuizStartConfirm;
