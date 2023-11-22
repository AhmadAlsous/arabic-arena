import { useState } from 'react';
import { Menu } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styled from 'styled-components';
import QuestionsMenu from './QuestionsMenu';

const Button = styled.button`
  background-color: transparent;
  border: 0;
  padding: 10px 20px;
  font-size: 1.1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s;
  }

  &:hover::before {
    background-color: var(--primary-blue-500);
  }
`;

const Icon = styled(ArrowDropDownIcon)`
  position: absolute;
  top: 7px;
`;

function QuestionsMenuButton({
  questions,
  currentQuestion,
  setCurrentQuestion,
  answers,
  setAnswers,
  selectedValue,
  setIsSubmitted,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>
        Questions
        <Icon>
          <ArrowDropDownIcon />
        </Icon>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
      >
        <QuestionsMenu
          questions={questions}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          answers={answers}
          handleClose={handleClose}
          setIsSubmitted={setIsSubmitted}
          setAnswers={setAnswers}
          selectedValue={selectedValue}
        />
      </Menu>
    </>
  );
}

export default QuestionsMenuButton;
