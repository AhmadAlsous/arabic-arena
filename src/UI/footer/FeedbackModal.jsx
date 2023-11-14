import { useState, forwardRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import clsx from 'clsx';
import { Box } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import HandlerButton from '@mui/material/Button';
import FeedbackForm from './FeedbackForm';

const Button = styled.button`
  background-color: transparent;
  border: none;

  &:hover {
    border-bottom: 1px solid #fff;
  }
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

function FeedbackModal({ btn, children, type }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{btn}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={{ width: 600 }}>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <FeedbackForm type={type}>{children}</FeedbackForm>
          <ButtonContainer>
            <HandlerButton variant='outlined' onClick={handleClose}>
              Cancel
            </HandlerButton>
            <HandlerButton variant='contained' onClick={handleClose}>
              Submit
            </HandlerButton>
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
  background-color: #fff;
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
