import styled from 'styled-components';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

const StyledFeedbackForm = styled.div`
  padding: 30px;
`;

const Textarea = styled(TextareaAutosize)`
  width: 95%;
  font-family: 'IBM Plex Sans', sans-serif;
  margin-top: 10px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #434d5b;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  resize: none;

  &:hover {
    border-color: #007aff;
  }

  &:focus {
    outline: 0;
    border-color: #007aff;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.3);
  }
`;

function FeedbackForm({ children, type }) {
  return (
    <StyledFeedbackForm>
      {children}
      <Textarea
        placeholder={`Enter your ${type} here`}
        minRows={5}
        maxRows={10}
      />
    </StyledFeedbackForm>
  );
}

export default FeedbackForm;
