import { useState } from 'react';
import LessonsBar from './LessonsBar';
import LessonsContainer from './LessonsContainer';
import Pagination from '../../UI/Pagination';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../config/constants';
import { fetchLessons } from '../../services/lessonService';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Button } from '@mui/base';
import { Stack } from '@mui/material';

function Lessons() {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ['lessons'],
    queryFn: fetchLessons,
  });
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchWord, setSearchWord] = useState('');
  const filteredLessons = data
    ? data
        .reverse()
        .filter(
          (lesson) =>
            (selectedLevel === 'All' || lesson.level === selectedLevel) &&
            (selectedType === 'All' || lesson.type === selectedType) &&
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
  const pageCount = Math.ceil(filteredLessons.length / PAGE_SIZE);
  const pageLessons = filteredLessons.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage === pageCount ? filteredLessons.length : currentPage * PAGE_SIZE
  );

  if (error) {
    toast.error(
      <Stack direction='row' sx={{ mr: '-15px' }}>
        <p>Error fetching lessons.</p>
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
      />
      <LessonsContainer lessons={pageLessons} isLoading={isLoading} />
      <Pagination pageCount={pageCount} />
    </>
  );
}

export default Lessons;
