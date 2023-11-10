import { useLocation } from 'react-router-dom';
import { greenTeaLesson } from '../../data/GreenTea';
import LessonInfo from './LessonInfo';
import LessonText from './LessonText';
import LessonBar from './LessonBar';

const lesson = greenTeaLesson;

function Lesson() {
  const { state } = useLocation();
  const lessonId = state?.id;
  console.log(lessonId);

  return (
    <>
      <LessonBar lesson={lesson} type={'Lessons'} />
      <LessonInfo lesson={lesson} />
      <LessonText lesson={lesson} />
    </>
  );
}

export default Lesson;
