import styled from 'styled-components';

const StyledLessonText = styled.div`
  font-family: 'Greta', 'Arial', 'Helvetica', sans-serif;
  line-height: 1.6;
  font-size: 1.2rem;
  padding: 0 10%;
  margin: -10px 0 40px 0;
  color: #333;

  & img {
    max-width: 100%;
    height: auto;
  }

  & iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

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
        __html: text,
      }}
    />
  );
}

export default LessonText;
