import styled from 'styled-components';
import { replaceNewLinesWithBreaks } from '../../utility/stringOperations';

const StyledLessonText = styled.div`
  direction: rtl;
  font-family: 'Arial', 'Tahoma', sans-serif;
  line-height: 1.6;
  text-align: right;
  font-size: 1.2rem;
  padding: 0 10%;
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
