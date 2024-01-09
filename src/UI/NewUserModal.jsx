import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { Box } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import HandlerButton from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { languages } from '../data/languages';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  gap: 15px;
  margin-bottom: 10px;
`;

const ModalTitle = styled.h4`
  margin: 0 0 30px 0;
  font-size: 1.75rem;
  letter-spacing: 1px;
  font-weight: 700;
  text-align: center;
`;

const Text = styled.p`
  line-height: 1.5;
  text-align: center;
`;

function NewUserModal({ open, onSaveLanguage, name }) {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <StyledModal open={open} slots={{ backdrop: StyledBackdrop }}>
      <ModalContent sx={{ width: 600 }}>
        <ModalTitle>Welcome, {name}!</ModalTitle>
        <Text>
          Welcome to Arabic Arena! Our platform is designed for learners of all
          levels, offering tailored lessons and quizzes to enhance your skills.
          Let's start this enriching and engaging path to language mastery
          together. Explore, learn, and grow with Arabic Arena! Before you get
          started, please select your language.
        </Text>
        <FormControl fullWidth variant='outlined' sx={{ mt: 3 }}>
          <InputLabel id='language-label'>Your Language</InputLabel>
          <Select
            labelId='language-label'
            value={selectedLanguage}
            onChange={(e) => handleChange(e)}
            label='Your Language'
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 200,
                },
              },
            }}
          >
            {languages.map((language) => (
              <MenuItem key={language.language} value={language.language}>
                <img
                  src={`https://flagcdn.com/w320/${language.countryCode}.png`}
                  alt={`${language.language} flag`}
                  width='20px'
                  height='13px'
                />
                &nbsp;&nbsp;
                {language.language}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <ButtonContainer>
          <HandlerButton
            variant='contained'
            onClick={() => onSaveLanguage(selectedLanguage)}
            sx={{ mt: 4 }}
          >
            Confirm
          </HandlerButton>
        </ButtonContainer>
      </ModalContent>
    </StyledModal>
  );
}

export default NewUserModal;

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

const StyledModal = styled(BaseModal)`
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
  padding: 30px;
  color: #1c2025;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 500;
  text-align: start;
  position: relative;
`;
