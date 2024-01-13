import { useTimer } from 'react-timer-hook';
import styled from 'styled-components';
import { formatTime } from '../../utility/stringOperations';
import { UserContext } from '../UserContext';
import { useContext } from 'react';

const StyledTimer = styled.div`
  font-size: 1.3rem;
  letter-spacing: 2.5px;
  color: ${(props) => (props.$time < 300 ? 'red' : 'black')};
`;

function QuizTimer({ submit, quizId }) {
  const { user } = useContext(UserContext);
  const savedExpiryTime = localStorage.getItem(`${user.id}${quizId}-time`);
  const expiryTimestamp = savedExpiryTime
    ? new Date(savedExpiryTime)
    : new Date();

  const { totalSeconds, seconds, minutes, hours } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      submit();
      localStorage.removeItem(`${user.id}${quizId}-time`);
    },
  });

  return (
    <StyledTimer $time={totalSeconds}>
      {hours ? formatTime(hours) + ':' : ''}
      {formatTime(minutes)}:{formatTime(seconds)}
    </StyledTimer>
  );
}

export default QuizTimer;
