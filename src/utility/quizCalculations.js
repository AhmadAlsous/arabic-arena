export const getResult = (questions, answers) => {
  const correctAnswers = questions.map((question) => question.correctAnswer);
  const score = correctAnswers.reduce((acc, curr, index) => {
    if (isAnswerCorrect(curr, answers[index])) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return score;
};

const isAnswerCorrect = (correctAnswer, answer) => {
  if (correctAnswer.length !== answer.length) return false;
  const correctAnswerSorted = correctAnswer.sort();
  const answerSorted = answer.sort();
  return correctAnswerSorted.every(
    (value, index) => value === answerSorted[index]
  );
};

export const getPercentage = (result, numQuestions) => {
  return Math.round((result / numQuestions) * 100);
};

export const getPlacement = (percentage) => {
  if (percentage >= 80) return 'Advanced';
  if (percentage >= 50) return 'Intermediate';
  return 'Beginner';
};
