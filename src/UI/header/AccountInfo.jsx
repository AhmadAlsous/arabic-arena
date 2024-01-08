import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Progress from './Progress';
import styled from 'styled-components';
import { UserContext } from '../../features/UserContext';
import { useContext } from 'react';

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
  const { user } = useContext(UserContext);
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
          <Progress value={30} />
        </ProgressContainer>
      )}
    </StyledAccountInfo>
  );
}

export default AccountInfo;
