import QuizHeader from './QuizHeader';
import { questions } from '../../data/DummyQuestions';
import QuizQuestionContainer from './QuizQuestionContainer';

const dummyQuestions = questions;

function Quiz() {
  return (
    <>
      <QuizHeader questions={dummyQuestions} />
      <QuizQuestionContainer questions={dummyQuestions} />
    </>
  );
}

export default Quiz;
