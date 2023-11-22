import styled from 'styled-components';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import { Button } from '@mui/material';

const StyledButton = styled(Button)`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover .volume-up-icon {
    display: block;
  }

  &:hover .volume-up-outlined-icon {
    display: none;
  }

  .volume-up-icon {
    display: none;
  }

  .volume-up-outlined-icon {
    display: block;
  }
`;

function SoundButton({ onClick, isQuestion }) {
  return (
    <StyledButton
      variant={isQuestion ? 'outlined' : 'text'}
      sx={{
        color: 'black',
        borderColor: 'black',
        ':hover': { borderColor: 'black', backgroundColor: 'transparent' },
      }}
      onClick={onClick}
    >
      <VolumeUpIcon className='volume-up-icon' />
      <VolumeUpOutlinedIcon className='volume-up-outlined-icon' />
      &nbsp;{isQuestion && `Click here`}
    </StyledButton>
  );
}

export default SoundButton;
