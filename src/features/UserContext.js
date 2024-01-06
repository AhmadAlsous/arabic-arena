import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    level: '',
    language: '',
    completedLessons: [],
    completedQuizzes: [],
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
