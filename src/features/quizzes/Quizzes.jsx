import { useState } from 'react';
import LessonsBar from '../lessons/LessonsBar';
import LessonsContainer from '../lessons/LessonsContainer';
import { quizzes } from '../../data/DummyQuizzes';
import Pagination from '../../UI/Pagination';

function Quizzes() {
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchWord, setSearchWord] = useState('');
  const filteredQuizzes = quizzes.filter(
    (lesson) =>
      (selectedLevel === 'All' || lesson.level === selectedLevel) &&
      (selectedType === 'All' || lesson.type === selectedType) &&
      (searchWord === '' ||
        lesson.titleArabic.includes(searchWord) ||
        lesson.titleEnglish.toLowerCase().includes(searchWord.toLowerCase()))
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
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        isQuiz={true}
      />
      <LessonsContainer lessons={filteredQuizzes} isQuiz={true} />
      <Pagination count={filteredQuizzes.length} />
    </>
  );
}

export default Quizzes;
