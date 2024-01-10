import { BACKEND_URL } from '../config/constants';

export const fetchQuizzes = async () => {
  const response = await fetch(`${BACKEND_URL}/quizzes`);
  if (!response.ok) {
    console.log(response);
    throw new Error();
  }
  return await response.json();
};

export const fetchQuiz = async (titleEnglish) => {
  if (!titleEnglish) return null;
  const response = await fetch(`${BACKEND_URL}/quizzes/${titleEnglish}`);
  if (!response.ok) {
    console.log(response);
    throw new Error();
  }
  return await response.json();
};

export const fetchPlacementTest = async () => {
  const response = await fetch(`${BACKEND_URL}/placement/1`);
  if (!response.ok) {
    console.log(response);
    throw new Error();
  }
  return await response.json();
};

export const getQuizCount = async () => {
  const response = await fetch(`${BACKEND_URL}/quizzes/count`);
  if (!response.ok) {
    console.log(response);
    throw new Error();
  }
  return await response.json();
};
