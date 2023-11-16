import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';
import QuestionOptions from './QuestionOptions';

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
  background-color: #eee;
  margin-bottom: 15px;
  letter-spacing: 1px;
  padding: 8px 5px;
`;

const Question = styled.h3`
  margin: 8px 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 500;
`;

function QuizQuestion({
  question,
  selectedValue,
  setSelectedValue,
  isAnswerChecked,
}) {
  const { questionArabic, questionEnglish, correctAnswer, questionType } =
    question;

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
    if (questionType === 'AllThatApply') {
      setSelectedValue((currentSelected) =>
        currentSelected.includes(optionId)
          ? currentSelected.filter((id) => id !== optionId)
          : [...currentSelected, optionId]
      );
    } else {
      setSelectedValue([optionId]);
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
        <Question>{questionArabic}</Question>
        {questionEnglish && <Question>{questionEnglish}</Question>}
      </QuestionTextContainer>
      <FormControl>
        {questionType === 'AllThatApply' ? (
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