import styled from 'styled-components';
import { replaceNewLinesWithBreaks } from '../../utility/stringOperations';

const StyledLessonText = styled.div`
  direction: rtl;
  font-family: 'Greta', 'Arial', 'Helvetica', sans-serif;
  line-height: 1.6;
  text-align: right;
  font-size: 1.2rem;
  padding: 0 10%;
  margin: -10px 0 40px 0;
  color: #333;

  @media (max-width: 1000px) {
    padding: 0 7%;
  }

  @media (max-width: 500px) {
    padding: 0 4%;
  }
`;

function LessonText({ text }) {
  return (
    <StyledLessonText
      dangerouslySetInnerHTML={{
        __html: replaceNewLinesWithBreaks(text),
      }}
    />
  );
}

export default LessonText;
