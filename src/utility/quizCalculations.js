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

export const getPlacement = (percentage, advanced, intermediate) => {
  if (percentage >= advanced) return 'Advanced';
  if (percentage >= intermediate) return 'Intermediate';
  return 'Beginner';
};

export const findLastAnsweredQuestion = (answers) => {
  let lastAnsweredIndex = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].length > 0) {
      lastAnsweredIndex = i;
    }
  }
  return lastAnsweredIndex;
};
