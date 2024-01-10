import { useParams } from 'react-router-dom';
import LessonInfo from './LessonInfo';
import LessonText from './LessonText';
import LessonBar from './LessonBar';
import ExerciseContainer from './ExerciseContainer';
import TableBody from './TableBody';
import { replaceDashesWithSpaces } from '../../utility/stringOperations';
import { transformLesson } from '../../utility/transforms';
import { fetchLesson } from '../../services/lessonService';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Button, Stack } from '@mui/material';
import Spinner from '../../UI/Spinner';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const letterHeader = [
  'Letter',
  'Initial',
  'Middle',
  'End',
  'Transcription',
  'Audio',
];

function Lesson() {
  const { user } = useContext(UserContext);
  const header = ['Arabic', 'English', 'Translation', 'Transcription', 'Audio'];
  // const header =
  //   user.language === 'English'
  //     ? ['Arabic', 'English', 'Transcription', 'Audio']
  //     : ['Arabic', 'English', user.language, 'Transcription', 'Audio'];
  const { lesson: lessonName } = useParams();
  const lessonTitle = replaceDashesWithSpaces(lessonName);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [lessonTitle],
    queryFn: () => fetchLesson(lessonTitle),
  });
  const lesson = data ? transformLesson(data) : null;

  if (error) {
    toast.error(
      <Stack direction='row' sx={{ mr: '-15px' }}>
        <p>Error fetching lesson.</p>
        <Button
          sx={{
            textTransform: 'none',
            color: 'black',
            fontSize: '0.95rem',
          }}
          onClick={() => {
            refetch();
            toast.remove();
          }}
        >
          Try again?
        </Button>
      </Stack>,
      { duration: 5000 }
    );
    return;
  }

  return (
    <>
      <LessonBar />
      {isLoading && (
        <Stack justifyContent='center' alignItems='center' height={400}>
          <Spinner />
        </Stack>
      )}
      {!isLoading && (
        <>
          <LessonInfo lesson={lesson} />
          {lesson.text && <LessonText text={lesson.text} />}
          {lesson.table && lesson.table.length > 0 && (
            <TableBody
              header={lesson.titleEnglish === 'Letters' ? letterHeader : header}
              body={lesson.table}
              id={lesson.titleEnglish === 'Letters' ? 'letter' : 'arabicWord'}
            />
          )}
          {lesson.exercises && lesson.exercises.length > 0 && (
            <ExerciseContainer
              id={lesson.id}
              exercises={lesson.exercises}
              lessonName={lesson.titleEnglish}
              lesson={lesson}
            />
          )}
        </>
      )}
    </>
  );
}

export default Lesson;
