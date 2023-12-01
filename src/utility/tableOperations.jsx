import styled from 'styled-components';
import TableCell from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)`
  && {
    font-size: 1.2rem;
    font-family: 'Din-round';

    @media (max-width: 1200px) {
      font-size: 1rem;
    }

    font-family: ${(props) => (props.$isArabic ? 'Al-Jazeera' : 'Din-round')};
  }
`;

export const generateTableCells = (obj) => {
  return Object.entries(obj).map(([key, value]) => (
    <StyledTableCell $isArabic={key === 'arabicWord'} key={key} align='center'>
      {value}
    </StyledTableCell>
  ));
};
