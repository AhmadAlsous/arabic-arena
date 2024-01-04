import Skeleton from '@mui/material/Skeleton';
import styled from 'styled-components';

const StyledLessonSkeleton = styled.div`
  width: 265px;
  height: 265px;
  box-shadow: 0 5px 10px 2px #bbb;
  transition: transform 0.3s, box-shadow 0.3s;

  @media (max-width: 1072px) {
    width: 350px;
    height: 300px;
  }

  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;

function LessonSkeleton() {
  return (
    <StyledLessonSkeleton>
      <Skeleton
        animation='wave'
        variant='rectangular'
        height='67px'
        sx={{ backgroundColor: '#ddd' }}
      />
      <Skeleton
        animation='wave'
        variant='rectangular'
        height='40.5px'
        sx={{ backgroundColor: 'var(--primary-blue-dark-500)' }}
      />
    </StyledLessonSkeleton>
  );
}

export default LessonSkeleton;
