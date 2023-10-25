import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Progress from './Progress';
import styled from 'styled-components';

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
  font-family: sans-serif;
`;

function AccountInfo() {
  return (
    <StyledAccountInfo>
      <InfoContainer>
        <StyledInfoElement>
          <PersonOutlineOutlinedIcon fontSize='medium' />
          <Word>Nizar Dabouqi</Word>
        </StyledInfoElement>
        <StyledInfoElement>
          <SchoolOutlinedIcon fontSize='medium' />
          <Word>Beginner</Word>
        </StyledInfoElement>
      </InfoContainer>
      <ProgressContainer>
        <Progress value={30} />
      </ProgressContainer>
    </StyledAccountInfo>
  );
}

export default AccountInfo;
