import draftToHtml from 'draftjs-to-html';

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

  return newQuiz;
};

export const toHtml = (editorState) => {
  let html = draftToHtml(editorState);
  const arabicRegex =
    /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  if (!doc.body || doc.body.innerHTML.trim() === '') {
    return '';
  }

  const applyAlignmentToParent = (el) => {
    while (el.parentNode && el.parentNode !== doc.body) {
      el = el.parentNode;
      if (el.nodeType === Node.ELEMENT_NODE) {
        el.style.textAlign = 'right';
        el.style.direction = 'rtl';
      }
    }
  };

  doc.body.querySelectorAll('*').forEach((el) => {
    if (el.nodeType === Node.TEXT_NODE && arabicRegex.test(el.textContent)) {
      applyAlignmentToParent(el);
    } else if (
      el.nodeType === Node.ELEMENT_NODE &&
      arabicRegex.test(el.textContent)
    ) {
      el.style.textAlign = 'right';
      el.style.direction = 'rtl';
    }
  });

  const applyEnglishAlignmentToParent = (el) => {
    while (el.parentNode && el.parentNode !== doc.body) {
      el = el.parentNode;
      if (el.nodeType === Node.ELEMENT_NODE) {
        el.style.textAlign = 'left';
        el.style.direction = 'ltr';
      }
    }
  };

  doc.body.querySelectorAll('*').forEach((el) => {
    if (el.nodeType === Node.TEXT_NODE && !arabicRegex.test(el.textContent)) {
      applyEnglishAlignmentToParent(el);
    } else if (
      el.nodeType === Node.ELEMENT_NODE &&
      !arabicRegex.test(el.textContent)
    ) {
      el.style.textAlign = 'left';
      el.style.direction = 'ltr';
    }
  });

  const divs = doc.body.querySelectorAll('div');
  divs.forEach((div) => {
    const hasImage = div.querySelector('img') !== null;
    const textAlignStyle = div.style.textAlign;
    if (hasImage && textAlignStyle === 'none') {
      div.style.textAlign = 'center';
    }
  });

  const images = doc.body.querySelectorAll('img');
  images.forEach((img) => {
    if (img.parentNode.tagName !== 'DIV') {
      const div = doc.createElement('div');
      div.style.textAlign = 'center';
      img.parentNode.insertBefore(div, img);
      div.appendChild(img);
    }
  });

  return doc.body.innerHTML;
};
