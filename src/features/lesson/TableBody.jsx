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
import { useQueries } from '@tanstack/react-query';
import { fetchWord } from '../../services/lessonService';
import { UserContext } from '../UserContext';
import { useContext } from 'react';

const WholeContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 600px) {
    width: 92%;
  }
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

    @media (max-width: 600px) {
      font-size: 0.8rem;
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
    @media (max-width: 1600px) {
      font-size: 0.9rem;
    }
  }
`;

const HiddenOnMobileTableCell = styled(StyledTableHeadCell)`
  && {
    @media (max-width: 600px) {
      display: none;
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
  const { user } = useContext(UserContext);
  const userLanguage = user.language.toLowerCase();
  const wordQueries = useQueries({
    queries: body.map((item, index) => ({
      queryKey: ['word', item.arabicWord, index],
      queryFn: () => fetchWord(item.arabicWord),
    })),
    combine: (results) => {
      return {
        data: results.map((result, index) => {
          if (result.data && 'english' in result.data) {
            return {
              ...body[index],
              ...(userLanguage !== 'english' && {
                [userLanguage]: result.data[userLanguage],
              }),
              english: result.data.english,
            };
          }
          return {
            ...body[index],
            ...(userLanguage !== 'english' && {
              [userLanguage]: '-',
            }),
            english: '-',
          };
        }),
        pending: results.some((result) => result.isFetching),
      };
    },
  });

  const words = wordQueries.data ? wordQueries.data : body;

  return (
    <WholeContainer>
      <Container>
        <StyledTableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {header.map((word) =>
                  header.length === 4 ||
                  (word !== 'Transcription' && word !== 'English') ||
                  (word === 'English' && userLanguage === 'English') ? (
                    <StyledTableHeadCell key={word} align='center'>
                      {word}
                    </StyledTableHeadCell>
                  ) : (
                    <HiddenOnMobileTableCell key={word} align='center'>
                      {word}
                    </HiddenOnMobileTableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <MuiTableBody>
              {words.map((obj) => (
                <StyledTableRow
                  key={obj[id]}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {generateTableCells(obj, userLanguage)}
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
