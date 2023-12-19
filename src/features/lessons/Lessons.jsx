import { useState } from 'react';
import LessonsBar from './LessonsBar';
import LessonsContainer from './LessonsContainer';
import Pagination from '../../UI/Pagination';
import { dummyLessons } from '../../data/DummyLessons';

const lessons = dummyLessons;

function Lessons() {
  const [selectedStatus, setSelectedStatus] = useState('All');
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
        status={selectedStatus}
        onChangeLevel={setSelectedLevel}
        onChangeType={setSelectedType}
        onChangeStatus={setSelectedStatus}
      />
      <LessonsContainer lessons={filteredLessons} />
      <Pagination count={filteredLessons.length} />
    </>
  );
}

export default Lessons;
