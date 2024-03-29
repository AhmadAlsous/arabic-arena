import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';
import QuestionOptions from './QuestionOptions';
import SoundButton from '../../UI/SoundButton';
import { readText } from '../../services/textToSpeech';

const QuestionContainer = styled.div`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
`;

const QuestionTextContainer = styled.div`
  text-align: center;
  margin: 10px 0;
  background-color: #f0f0f0;
  margin-bottom: 15px;
  letter-spacing: 0.5px;
  padding: 8px 5px;
`;

const Question = styled.h3`
  margin: 8px 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: #222;

  @media (max-width: 1000px) {
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Arabic = styled.span`
  font-family: 'Al-Jazeera';
`;

const ButtonContainer = styled.div`
  margin: 20px 0 10px 0;
`;

function QuizQuestion({
  question,
  selectedValue,
  setSelectedValue,
  isAnswerChecked,
  handleChangeAnswer,
}) {
  const {
    questionArabic,
    questionEnglish,
    audioWord,
    correctAnswer,
    questionType,
  } = question;

  const isSelected = (optionId) => selectedValue.includes(optionId);

  const handleOptionClick = (event, optionId) => {
    if (
      isAnswerChecked ||
      event.target instanceof HTMLInputElement ||
      event.target.tagName === 'LABEL' ||
      event.target.tagName === 'SPAN'
    ) {
      return;
    }
    modifySelectedValue(optionId);
  };

  const handleChange = (event, optionId) => {
    event.stopPropagation();
    if (isAnswerChecked) return;
    modifySelectedValue(optionId);
  };

  const modifySelectedValue = (optionId) => {
    if (questionType === 'allThatApply') {
      setSelectedValue((currentSelected) => {
        const newValue = currentSelected.includes(optionId)
          ? currentSelected.filter((id) => id !== optionId)
          : [...currentSelected, optionId];
        handleChangeAnswer(newValue);
        return newValue;
      });
    } else {
      setSelectedValue([optionId]);
      handleChangeAnswer([optionId]);
    }
  };

  const renderOptions = () => (
    <QuestionOptions
      question={question}
      isSelected={isSelected}
      handleChange={handleChange}
      handleOptionClick={handleOptionClick}
      correctAnswer={correctAnswer}
      isAnswerChecked={isAnswerChecked}
    />
  );

  return (
    <QuestionContainer>
      <QuestionTextContainer>
        <Question>
          <Arabic>{questionArabic}</Arabic>
        </Question>
        {questionEnglish && <Question>{questionEnglish}</Question>}
        {audioWord && (
          <ButtonContainer>
            <SoundButton
              isQuestion={true}
              onClick={() => readText(audioWord)}
            />
          </ButtonContainer>
        )}
      </QuestionTextContainer>
      <FormControl>
        {questionType === 'allThatApply' ? (
          renderOptions()
        ) : (
          <RadioGroup
            value={selectedValue[0] || ''}
            onChange={(e) => handleChange(e, e.target.value)}
          >
            {renderOptions()}
          </RadioGroup>
        )}
      </FormControl>
    </QuestionContainer>
  );
}

export default QuizQuestion;
