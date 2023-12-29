import { useState } from 'react';
import LessonsBar from '../lessons/LessonsBar';
import LessonsContainer from '../lessons/LessonsContainer';
import { quizzes } from '../../data/DummyQuizzes';
import Pagination from '../../UI/Pagination';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../config/constants';

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

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));
  const pageCount = Math.ceil(filteredQuizzes.length / PAGE_SIZE);
  const pageQuizzes = filteredQuizzes.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage === pageCount ? filteredQuizzes.length : currentPage * PAGE_SIZE
  );

  const goToFirstPage = () => {
    if (currentPage !== 1) {
      searchParams.set('page', 1);
      setSearchParams(searchParams);
    }
  };
  const handleChangeStatus = (status) => {
    goToFirstPage();
    setSelectedStatus(status);
  };
  const handleChangeLevel = (level) => {
    goToFirstPage();
    setSelectedLevel(level);
  };
  const handleChangeType = (type) => {
    goToFirstPage();
    setSelectedType(type);
  };
  const handleChangeSearch = (search) => {
    goToFirstPage();
    setSearchWord(search);
  };

  return (
    <>
      <LessonsBar
        level={selectedLevel}
        type={selectedType}
        status={selectedStatus}
        onChangeLevel={handleChangeLevel}
        onChangeType={handleChangeType}
        onChangeStatus={handleChangeStatus}
        searchWord={searchWord}
        setSearchWord={handleChangeSearch}
        isQuiz={true}
      />
      <LessonsContainer lessons={pageQuizzes} isQuiz={true} />
      <Pagination pageCount={pageCount} />
    </>
  );
}

export default Quizzes;
