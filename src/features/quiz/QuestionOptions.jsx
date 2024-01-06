import styled, { css } from 'styled-components';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const focusStyles = css`
  outline: 0;
  border-color: #007aff;
  box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.3);
`;

const correctStyles = css`
  border-color: #28a745;
  outline: 0;
  box-shadow: 0 0 2px 3px rgba(40, 167, 69, 0.6);
`;

const wrongStyles = css`
  border-color: #dc3545;
  outline: 0;
  box-shadow: 0 0 2px 3px rgba(220, 53, 69, 0.5);
`;

const Option = styled.div`
  padding: 10px 20px;
  border-radius: 50px;
  margin: 8px 0;
  border: 1px solid #999;
  display: flex;
  align-items: center;
  opacity: ${(props) =>
    !props.$isAnswerChecked ||
    props.$selectedvalue ||
    props.$correctAnswer.includes(props.value)
      ? '1'
      : '0.5'};
  justify-content: ${(props) =>
    props.$isAnswerChecked ? 'space-between' : 'flex-end'};
  cursor: ${(props) => (props.$isAnswerChecked ? 'default' : 'pointer')};

  &:hover {
    border-color: ${(props) => (props.$isAnswerChecked ? '#999' : '#007aff')};
  }

  ${(props) => props.$selectedvalue && focusStyles}
  ${(props) =>
    props.$isAnswerChecked &&
    props.$correctAnswer.includes(props.value) &&
    correctStyles}
  ${(props) =>
    props.$isAnswerChecked &&
    props.$selectedvalue &&
    !props.$correctAnswer.includes(props.value) &&
    wrongStyles}
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  && {
    cursor: ${(props) => (props.$isAnswerChecked ? 'default' : 'pointer')};

    .MuiFormControlLabel-label {
      font-size: 1.1rem;
      letter-spacing: 1px;
      text-align: right;
      user-select: none;
      font-family: 'Greta';
      color: #222;

      @media (max-width: 700px) {
        font-size: 1rem;
      }
    }

    .MuiRadio-root {
      cursor: ${(props) => (props.$isAnswerChecked ? 'default' : 'pointer')};
    }

    .MuiCheckbox-root {
      cursor: ${(props) => (props.$isAnswerChecked ? 'default' : 'pointer')};
    }
  }
`;

function QuestionOptions({
  question,
  isAnswerChecked,
  correctAnswer,
  handleChange,
  handleOptionClick,
  isSelected,
}) {
  const { options, questionType } = question;
  const Control = questionType === 'allThatApply' ? Checkbox : Radio;

  return options.map((option) => (
    <Option
      key={option.optionId}
      onClick={(e) => handleOptionClick(e, option.optionId)}
      value={option.optionId}
      $selectedvalue={isSelected(option.optionId)}
      $isAnswerChecked={isAnswerChecked}
      $correctAnswer={correctAnswer}
    >
      {isAnswerChecked &&
        (correctAnswer.includes(option.optionId) ? (
          <CheckIcon sx={{ color: '#28a745', fontSize: '30px' }} />
        ) : isSelected(option.optionId) ? (
          <CloseIcon sx={{ color: '#dc3545', fontSize: '30px' }} />
        ) : (
          <div />
        ))}
      <StyledFormControlLabel
        $isAnswerChecked={isAnswerChecked}
        value={option.optionId}
        control={
          <Control
            checked={isSelected(option.optionId)}
            disableRipple={isAnswerChecked}
            onClick={(event) => handleChange(event, option.optionId)}
            sx={getCheckboxRadioStyles(
              isAnswerChecked,
              correctAnswer,
              option.optionId
            )}
          />
        }
        label={option.option}
        labelPlacement='start'
      />
    </Option>
  ));
}

function getCheckboxRadioStyles(isAnswerChecked, correctAnswer, optionId) {
  return {
    '&.Mui-checked': {
      color: getColorBasedOnAnswer(isAnswerChecked, correctAnswer, optionId),
    },
  };
}

function getColorBasedOnAnswer(isAnswerChecked, correctAnswer, optionId) {
  if (isAnswerChecked && correctAnswer.includes(optionId)) {
    return '#28a745';
  } else if (isAnswerChecked && !correctAnswer.includes(optionId)) {
    return '#dc3545';
  }
  return '#007aff';
}

export default QuestionOptions;
