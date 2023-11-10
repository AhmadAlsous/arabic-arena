import styled from 'styled-components';
import { replaceNewLinesWithBreaks } from '../../utility/stringOperations';

const StyledLessonText = styled.div`
  direction: rtl;
  font-family: 'Arial', 'Tahoma', sans-serif;
  line-height: 1.6;
  text-align: right;
  font-size: 1.2rem;
`;

function LessonText({ lesson }) {
  return (
    <StyledLessonText
      dangerouslySetInnerHTML={{
        __html: replaceNewLinesWithBreaks(lesson.text),
      }}
    />
  );
}

export default LessonText;
