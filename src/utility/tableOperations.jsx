import styled from 'styled-components';
import TableCell from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)`
  && {
    font-size: 1.2rem;
    font-family: ${(props) => (props.$isArabic ? 'Al-Jazeera' : 'Din-round')};

    @media (max-width: 1200px) {
      font-size: 1rem;
    }

    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  }
`;

const HiddenOnMobileTableCell = styled(StyledTableCell)`
  && {
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

// fix for letters later
export const generateTableCells = (obj) => {
  return Object.entries(obj).map(([key, value]) =>
    key === 'arabicWord' || key === 'translation' ? (
      <StyledTableCell
        $isArabic={key === 'arabicWord'}
        key={key}
        align='center'
      >
        {value}
      </StyledTableCell>
    ) : (
      <HiddenOnMobileTableCell key={key} align='center'>
        {value}
      </HiddenOnMobileTableCell>
    )
  );
};
