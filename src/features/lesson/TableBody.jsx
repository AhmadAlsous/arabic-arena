import styled from 'styled-components';
import Table from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { generateTableCells } from '../../utility/tableOperations';
import { readText } from '../../services/textToSpeech';
import SoundButton from '../../UI/SoundButton';

const WholeContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
`;

const StyledTableContainer = styled(TableContainer)`
  margin: 0px 0 30px 0;
`;

const StyledTableCell = styled(TableCell)`
  && {
    font-size: 1.2rem;

    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }
`;

const StyledTableHeadCell = styled(StyledTableCell)`
  && {
    font-size: 1.2rem;
    background-color: var(--primary-blue-dark-500);
    font-family: 'Din-round';
    color: #ffffff;
    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }
`;

const StyledTableRow = styled(TableRow)`
  && {
    &:hover {
      background-color: #eeeeee;
    }

    border: 1.5px solid #cccccc;
  }
`;

function TableBody({ header, body, id }) {
  return (
    <WholeContainer>
      <Container>
        <StyledTableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {header.map((word) => (
                  <StyledTableHeadCell key={word} align='center'>
                    {word}
                  </StyledTableHeadCell>
                ))}
              </TableRow>
            </TableHead>
            <MuiTableBody>
              {body.map((obj) => (
                <StyledTableRow
                  key={obj[id]}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {generateTableCells(obj)}
                  <StyledTableCell align='center'>
                    <SoundButton onClick={() => readText(obj[id])} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </MuiTableBody>
          </Table>
        </StyledTableContainer>
      </Container>
    </WholeContainer>
  );
}

export default TableBody;
