import styled from 'styled-components';

const StyledOverviewBox = styled.div`
  color: #123444;
  width: 100%;
  text-align: center;
`;

const StyledTitle = styled.h3`
  font-size: 1.3rem;
  letter-spacing: 2px;
  margin-bottom: 7px;
  font-family: 'Feather';
`;

const StyledText = styled.p`
  font-size: 0.9rem;
  font-family: 'Din-round';
`;

function OverviewBox({ title, children }) {
  return (
    <StyledOverviewBox>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{children}</StyledText>
    </StyledOverviewBox>
  );
}

export default OverviewBox;
