import { useState } from 'react';
import LessonsBar from './LessonsBar';
import LessonsContainer from './LessonsContainer';
import Pagination from '../../UI/Pagination';
import { dummyLessons } from '../../data/DummyLessons';

const lessons = dummyLessons;

function Lessons() {
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const filteredLessons = lessons.filter(
    (lesson) =>
      (selectedLevel === 'All' || lesson.level === selectedLevel) &&
      (selectedType === 'All' || lesson.type === selectedType)
  );

  return (
    <>
      <LessonsBar
        level={selectedLevel}
        type={selectedType}
        onChangeLevel={setSelectedLevel}
        onChangeType={setSelectedType}
        title='LESSONS'
      />
      <LessonsContainer lessons={filteredLessons} />
      <Pagination count={filteredLessons.length} />
    </>
  );
}

export default Lessons;
