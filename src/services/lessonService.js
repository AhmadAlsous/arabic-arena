import { BACKEND_URL } from '../config/constants';

export const fetchLessons = async () => {
  const response = await fetch(`${BACKEND_URL}/lessons`);
  if (!response.ok) {
    console.log(response);
    throw new Error();
  }
  return await response.json();
};

export const fetchLesson = async (titleEnglish) => {
  if (!titleEnglish) return null;
  const response = await fetch(`${BACKEND_URL}/lessons/${titleEnglish}`);
  if (!response.ok) {
    console.log(response);
    throw new Error();
  }
  return await response.json();
};

export const fetchWord = async (word) => {
  const response = await fetch(`${BACKEND_URL}/words/${word}`);
  if (!response.ok) {
    console.log(response);
    throw new Error();
  }
  return await response.json();
};
