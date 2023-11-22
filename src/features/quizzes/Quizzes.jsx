import { useState } from 'react';
import LessonsBar from '../lessons/LessonsBar';
import LessonsContainer from '../lessons/LessonsContainer';
import { quizzes } from '../../data/DummyQuizzes';
import Pagination from '../../UI/Pagination';

function Quizzes() {
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const filteredQuizzes = quizzes.filter(
    (lesson) =>
      (selectedLevel === 'All' || lesson.quizLevel === selectedLevel) &&
      (selectedType === 'All' || lesson.quizType === selectedType)
  );

  return (
    <>
      <LessonsBar
        level={selectedLevel}
        type={selectedType}
        onChangeLevel={setSelectedLevel}
        onChangeType={setSelectedType}
        isQuiz={true}
      />
      <LessonsContainer lessons={filteredQuizzes} isQuiz={true} />
      <Pagination count={filteredQuizzes.length} />
    </>
  );
}

export default Quizzes;
