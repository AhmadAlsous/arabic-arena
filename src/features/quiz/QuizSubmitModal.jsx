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

function QuizSubmitModal({ btn, onClose, onSubmit, type }) {
  return (
    <FeedbackModal
      btn={btn}
      onClose={onClose}
      width={400}
      onSubmit={onSubmit}
      type={type}
    >
      <ConfirmContainer>
        <Title>Confirmation</Title>
        <ConfirmText>
          Once you submit, you will no longer be able to change your answers for
          this attempt.
        </ConfirmText>
      </ConfirmContainer>
    </FeedbackModal>
  );
}

export default QuizSubmitModal;
