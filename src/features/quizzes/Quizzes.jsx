import { useContext, useEffect, useState } from 'react';
import LessonsBar from '../lessons/LessonsBar';
import LessonsContainer from '../lessons/LessonsContainer';
import Pagination from '../../UI/Pagination';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../config/constants';
import { fetchQuizzes } from '../../services/quizServices';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Button, Stack } from '@mui/material';
import { UserContext } from '../UserContext';

function Quizzes() {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ['quizzes'],
    queryFn: fetchQuizzes,
  });
  const { user } = useContext(UserContext);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchWord, setSearchWord] = useState('');
  useEffect(() => {
    if (user.level) {
      setSelectedLevel(user.level);
    }
  }, [user.level]);
  const filteredQuizzes = data
    ? data.filter(
        (lesson) =>
          (selectedLevel === 'All' || lesson.level === selectedLevel) &&
          (selectedType === 'All' || lesson.type === selectedType) &&
          (selectedStatus === 'All' ||
            (selectedStatus === 'Complete' &&
              user.completedQuizzes.includes(lesson.id)) ||
            (selectedStatus === 'Incomplete' &&
              !user.completedQuizzes.includes(lesson.id))) &&
          (searchWord === '' ||
            lesson.titleArabic.includes(searchWord) ||
            lesson.titleEnglish
              .toLowerCase()
              .includes(searchWord.toLowerCase()))
      )
    : [];

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));
  const pageCount = Math.ceil(filteredQuizzes.length / PAGE_SIZE);
  const pageQuizzes = filteredQuizzes.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage === pageCount ? filteredQuizzes.length : currentPage * PAGE_SIZE
  );

  if (error) {
    toast.error(
      <Stack direction='row' sx={{ mr: '-15px' }}>
        <p>Error fetching quizzes.</p>
        <Button
          sx={{
            textTransform: 'none',
            color: 'black',
            fontSize: '0.95rem',
          }}
          onClick={() => {
            refetch();
            toast.dismiss();
          }}
        >
          Try again?
        </Button>
      </Stack>,
      { duration: 5000 }
    );
  }

  if (filteredQuizzes.length === 0) {
    return (
      <Stack justifyContent='center' alignItems='center' height={400}>
        <p>No lessons found matching your filters.</p>
      </Stack>
    );
  }

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
      <LessonsContainer
        lessons={pageQuizzes}
        isQuiz={true}
        isLoading={isLoading}
        error={error}
      />
      <Pagination pageCount={pageCount} />
    </>
  );
}

export default Quizzes;
