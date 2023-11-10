import styled from 'styled-components';
import TableBody from './TableBody';
import { letters } from '../../data/letters';
import { dummyTable } from '../../data/DummyVocabulary';
import LessonBar from '../lesson/LessonBar';
import TableTitle from './TableTitle';

const StyledTable = styled.div`
  padding-bottom: 40px;
`;

// const header = [
//   'Letter',
//   'Initial',
//   'Middle',
//   'End',
//   'Transcription',
//   'Pronunciation',
// ];

// const body = letters.table;

const header = [
  'Arabic Word',
  'English Word',
  'Translation',
  'Transcription',
  'Pronunciation',
];

const body = dummyTable.table;

function Table() {
  return (
    <StyledTable>
      <LessonBar lesson={dummyTable} type='Vocabulary' />
      <TableTitle table={dummyTable} />
      <TableBody header={header} body={body} id='arabicWord' />
      {/* <LessonBar lesson={letters} type='Vocabulary' />
      <TableTitle table={letters} />
      <TableBody header={header} body={body} id='letter' /> */}
    </StyledTable>
  );
}

export default Table;
