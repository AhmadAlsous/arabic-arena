import styled from 'styled-components';
import QuizBox from './QuizBox';
import { LinkReset } from '../../utility/LinkReset';
import { replaceSpacesWithDashes } from '../../utility/stringOperations';
import Modal from '../../UI/Modal';
import { Button } from '@mui/material';

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
  console.log(quiz);
  const firstTime = localStorage.getItem(quiz.id) === null;

  return firstTime ? (
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
          <Text>Are you sure you want to start this quiz?</Text>
          <Text>Time limit: {quiz.time} mins</Text>
          <Text>Number of questions: {quiz?.questions?.length}</Text>
        </ConfirmText>
      </ConfirmContainer>
    </Modal>
  ) : (
    <LinkReset
      to={`/quiz/${replaceSpacesWithDashes(
        quiz.titleEnglish.toLowerCase()
      )}/results`}
    >
      <QuizBox quiz={quiz} />
    </LinkReset>
  );
}

export default QuizStartConfirm;
