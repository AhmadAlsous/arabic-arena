export const transformLesson = (lesson) => {
  const {
    id,
    titleEnglish,
    titleArabic,
    level,
    type,
    imageLink,
    videoLink,
    videoText,
    text,
    table,
    exercises,
    video,
    hasTable,
    hasExercises,
  } = lesson;

  const transformedLesson = {
    id,
    titleEnglish,
    titleArabic,
    level,
    type,
    imageLink,
    videoLink,
    videoText,
    text,
    table,
    exercises,
  };

  if (lesson.exercises && lesson.exercises.length > 0) {
    transformedLesson.exercises = lesson.exercises.map((exercise) => {
      const newOptions = exercise.options.map((option, index) => ({
        optionId: String(index + 1),
        option,
      }));

      const newCorrectAnswer = exercise.correctAnswer.map(
        (answer) =>
          newOptions.find((option) => option.option === answer).optionId
      );

      return {
        ...exercise,
        options: newOptions,
        correctAnswer: newCorrectAnswer,
      };
    });
  }

  if (!video) {
    transformedLesson.videoLink = '';
    transformedLesson.videoText = '';
  }

  if (!hasTable) {
    transformedLesson.table = [];
  }

  if (!hasExercises) {
    transformedLesson.exercises = [];
  }

  console.log(transformedLesson);

  return transformedLesson;
};

export const transformQuiz = (quiz) => {
  const newQuiz = { ...quiz };
  newQuiz.questions = quiz.questions.map((question) => {
    const newOptions = question.options.map((option, index) => ({
      optionId: String(index + 1),
      option,
    }));

    const newCorrectAnswer = question.correctAnswer.map(
      (answer) => newOptions.find((option) => option.option === answer).optionId
    );

    return {
      ...question,
      options: newOptions,
      correctAnswer: newCorrectAnswer,
    };
  });

  console.log(newQuiz);

  return newQuiz;
};
