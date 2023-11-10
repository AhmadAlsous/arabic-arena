import styled from 'styled-components';
import TableCell from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)`
  && {
    font-size: 1.2rem;

    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }
`;

export const generateTableCells = (obj) => {
  return Object.entries(obj).map(([key, value]) => (
    <StyledTableCell key={key} align='center'>
      {value}
    </StyledTableCell>
  ));
};
