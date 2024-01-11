import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Progress from './Progress';
import styled from 'styled-components';
import { ProgressContext, UserContext } from '../../features/UserContext';
import { useContext, useEffect } from 'react';

const StyledAccountInfo = styled.div`
  display: flex;
  padding: 15px 0;
  width: 250px;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 73%;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledInfoElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  margin: -8px 0;
`;

const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Word = styled.p`
  padding-left: 15px;
  font-size: 1rem;
`;

function AccountInfo() {
  const { user, setUser } = useContext(UserContext);
  const { progress } = useContext(ProgressContext);
  const completedLevelLessons = user.completedLessons.filter(
    (lesson) => lesson.level === user.level
  );
  const completedLevelQuizzes = user.completedQuizzes.filter(
    (quiz) => quiz.level === user.level
  );
  const userProgress = Math.round(
    ((completedLevelLessons.length + completedLevelQuizzes.length) /
      progress[user.level]) *
      100
  );
  useEffect(() => {
    if (userProgress === 100 && user.level !== 'Advanced') {
      const newLevel = user.level === 'Beginner' ? 'Intermediate' : 'Advanced';
      setUser({ ...user, level: newLevel });
    }
  }, [userProgress]);
  return (
    <StyledAccountInfo>
      <InfoContainer>
        <StyledInfoElement>
          <PersonOutlineOutlinedIcon fontSize='medium' />
          <Word>{user.firstName}</Word>
        </StyledInfoElement>
        {user.level && (
          <StyledInfoElement>
            <SchoolOutlinedIcon fontSize='medium' />
            <Word>{user.level}</Word>
          </StyledInfoElement>
        )}
      </InfoContainer>
      {user.level && (
        <ProgressContainer>
          <Progress value={userProgress} />
        </ProgressContainer>
      )}
    </StyledAccountInfo>
  );
}

export default AccountInfo;
