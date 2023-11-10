import styled from 'styled-components';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';

const StyledButton = styled.button`
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

function SoundButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <VolumeUpIcon className='volume-up-icon' />
      <VolumeUpOutlinedIcon className='volume-up-outlined-icon' />
    </StyledButton>
  );
}

export default SoundButton;
