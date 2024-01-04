import { LinkReset } from '../../utility/LinkReset';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import styled from 'styled-components';

const StyledLessonBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  align-items: center;
  border-bottom: 1.5px solid #888888;
`;

const TypesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-right: 20px;
`;

const StyledLink = styled(LinkReset)`
  & > svg {
    vertical-align: middle;
  }

  &:hover {
    border-bottom: 2px solid var(--primary-blue-500);
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1.5px;
  margin-left: 20px;
`;

function LessonBar() {
  return (
    <StyledLessonBar>
      <Title>Lessons</Title>
      <TypesContainer>
        <StyledLink to={'/learn'}>
          <ChevronLeftIcon />
          Back to lessons
        </StyledLink>
      </TypesContainer>
    </StyledLessonBar>
  );
}

export default LessonBar;
