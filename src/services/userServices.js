import { BACKEND_URL } from '../config/constants';

export const fetchUser = async (id) => {
  if (!id) return null;
  const response = await fetch(`${BACKEND_URL}/users/${id}`);
  if (!response.ok) {
    throw new Error();
  }
  return await response.json();
};

export const addUser = async (user) => {
  const response = await fetch(`${BACKEND_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    console.log(response);
    throw new Error();
  }
  return await response.json();
};
