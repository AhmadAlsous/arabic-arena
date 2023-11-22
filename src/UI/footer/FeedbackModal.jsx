import { useState, forwardRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import HandlerButton from '@mui/material/Button';
import FeedbackForm from './FeedbackForm';
import QuizBox from '../../features/quizzes/QuizBox';
import { LinkReset } from '../../utility/LinkReset';
import { replaceSpacesWithDashes } from '../../utility/stringOperations';

const FeedbackButton = styled.button`
  background-color: transparent;
  border: none;

  &:hover {
    border-bottom: 1px solid #fff;
  }
`;

const NoneButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 95%;
  gap: 15px;
  margin-bottom: 10px;
`;

function FeedbackModal({
  btn,
  children,
  type,
  onClose,
  width = 600,
  onSubmit,
  quiz,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    if (onClose) onClose();
    setOpen(false);
  };
  const handleSubmit = () => {
    handleClose();
    if (onSubmit) onSubmit();
  };

  return (
    <div>
      {type === 'submit' ? (
        <Button onClick={handleOpen}>{btn}</Button>
      ) : type === 'confirm' ? (
        <NoneButton onClick={handleOpen}>
          <QuizBox quiz={quiz} />
        </NoneButton>
      ) : (
        <FeedbackButton onClick={handleOpen}>{btn}</FeedbackButton>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={{ width }}>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          {type === 'feedback' || type === 'problem' ? (
            <FeedbackForm type={type}>{children}</FeedbackForm>
          ) : (
            children
          )}
          <ButtonContainer>
            <HandlerButton variant='outlined' onClick={handleClose}>
              Cancel
            </HandlerButton>
            {type === 'confirm' ? (
              <LinkReset
                to={`/quiz/${replaceSpacesWithDashes(
                  quiz.titleEnglish.toLowerCase()
                )}`}
                state={{ quizId: quiz.quizId }}
              >
                <HandlerButton variant='contained' onClick={handleSubmit}>
                  Start
                </HandlerButton>
              </LinkReset>
            ) : (
              <HandlerButton variant='contained' onClick={handleSubmit}>
                Submit
              </HandlerButton>
            )}
          </ButtonContainer>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default FeedbackModal;

const Backdrop = forwardRef(function backdrop(props, ref) {
  const { open, className, ownerState, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  background-color: #f0f0f0;
  border-radius: 8px;
  border: 1px solid #dae2ed;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  color: #1c2025;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 500;
  text-align: start;
  position: relative;
`;
