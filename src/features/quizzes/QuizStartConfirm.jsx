import styled from 'styled-components';
import FeedbackModal from '../../UI/footer/FeedbackModal';

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

function QuizStartConfirm({ onSubmit, type, quiz }) {
  return (
    <FeedbackModal width={400} onSubmit={onSubmit} type={type} quiz={quiz}>
      <ConfirmContainer>
        <Title>Confirmation</Title>
        <ConfirmText>
          <Text>Are you sure you want to start this quiz?</Text>
          <Text>Time limit: {quiz.time} mins</Text>
          <Text>Number of questions: {quiz?.questions?.length}</Text>
        </ConfirmText>
      </ConfirmContainer>
    </FeedbackModal>
  );
}

export default QuizStartConfirm;
