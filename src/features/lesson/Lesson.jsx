//import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { greenTeaLesson } from '../../data/GreenTea';
import { lessons } from '../../data/lessons';
import LessonInfo from './LessonInfo';
import LessonText from './LessonText';
import LessonBar from './LessonBar';
import ExerciseContainer from './ExerciseContainer';
import TableBody from './TableBody';
import { replaceSpacesWithDashes } from '../../utility/stringOperations';
import { transformLesson } from '../../utility/transforms';
//import PdfLesson from './PdfLesson';

const header = [
  'Arabic Word',
  'English Word',
  'Translation',
  'Transcription',
  'Pronunciation',
];

const letterHeader = [
  'Letter',
  'Initial',
  'Middle',
  'End',
  'Transcription',
  'Pronunciation',
];

function Lesson() {
  // const { state } = useLocation();
  // const lessonId = state?.id;
  const { lesson: lessonName } = useParams();
  const lesson =
    lessons.find(
      (lesson) =>
        replaceSpacesWithDashes(lesson.titleEnglish.toLocaleLowerCase()) ===
        lessonName
    ) || transformLesson(greenTeaLesson);

  return (
    <>
      <LessonBar lesson={lesson} />
      <LessonInfo lesson={lesson} />
      {lesson.text && <LessonText text={lesson.text} />}
      {lesson.table && (
        <TableBody
          header={lesson.titleEnglish === 'Letters' ? letterHeader : header}
          body={lesson.table}
          id={lesson.titleEnglish === 'Letters' ? 'letter' : 'arabicWord'}
        />
      )}
      {/* <PdfLesson /> */}
      {lesson.exercises && (
        <ExerciseContainer
          exercises={lesson.exercises}
          lessonName={lesson.titleEnglish}
          lesson={lesson}
        />
      )}
    </>
  );
}

export default Lesson;
