import styled from 'styled-components';

const StyledTableTitle = styled.div`
  padding: 30px 0 40px 0;
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-align: center;
`;

function TableTitle({ table }) {
  return (
    <StyledTableTitle>
      <Title>{table.titleEnglish}</Title>
      <Title>{table.titleArabic}</Title>
    </StyledTableTitle>
  );
}

export default TableTitle;
