import { useTimer } from 'react-timer-hook';
import styled from 'styled-components';
import { formatTime } from '../../utility/stringOperations';

const StyledTimer = styled.div`
  font-size: 1.3rem;
  letter-spacing: 2.5px;
  color: ${(props) => (props.$time < 300 ? 'red' : 'black')};
`;

function QuizTimer({ expiryTimestamp, submit }) {
  const { totalSeconds, seconds, minutes, hours } = useTimer({
    expiryTimestamp,
    onExpire: () => submit(),
  });

  return (
    <StyledTimer $time={totalSeconds}>
      {hours ? formatTime(hours) + ':' : ''}
      {formatTime(minutes)}:{formatTime(seconds)}
    </StyledTimer>
  );
}

export default QuizTimer;
