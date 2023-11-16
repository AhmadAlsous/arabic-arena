import styled from 'styled-components';

const StyledQuestionNumber = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 45px;
  border-radius: 6px;
  border: 1.5px solid black;
  border-width: ${(props) => (props.isActive ? '3px' : '1.5px')};

  &: hover {
    background-color: #ddd;
  }
`;

const Number = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin: auto;
`;

const Status = styled.div`
  width: 100%;
  height: 12px;
  border-radius: 0 0 4px 4px;
  background-color: ${(props) =>
    props.status == 'answered' ? '#666' : 'transparent'};
`;

function QuestionNumber({ questionNumber, status, isActive }) {
  return (
    <StyledQuestionNumber isActive={isActive}>
      <Number>{questionNumber}</Number>
      <Status status={status}></Status>
    </StyledQuestionNumber>
  );
}

export default QuestionNumber;
