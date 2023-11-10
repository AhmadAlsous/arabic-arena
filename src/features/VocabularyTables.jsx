import { useState } from 'react';
import LessonsBar from './lessons/LessonsBar';
import { tables } from '../data/DummyTables';
import LessonsContainer from './lessons/LessonsContainer';
import Pagination from '../UI/Pagination';

const vocabularyTables = tables;

function VocabularyTables() {
  const [selectedLevel, setSelectedLevel] = useState('All');
  const filteredTables = vocabularyTables.filter(
    (lesson) => selectedLevel === 'All' || lesson.level === selectedLevel
  );

  return (
    <>
      <LessonsBar
        level={selectedLevel}
        onChangeLevel={setSelectedLevel}
        title='VOCABULARY'
      />
      <LessonsContainer lessons={filteredTables} />
      <Pagination count={filteredTables.length} />
    </>
  );
}

export default VocabularyTables;
