import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Layout from './pages/Layout';
import Lessons from './features/Lessons';
import Lesson from './features/Lesson';
import Forum from './features/Forum';
import Tables from './features/Tables';
import Quiz from './features/Quiz';
import GlobalStyle from './GlobalStyle';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  {
    element: <Layout />,
    children: [
      { path: '/learn', element: <Lessons /> },
      { path: '/learn/:lesson', element: <Lesson /> },
      { path: '/ask', element: <Forum /> },
      { path: '/tables', element: <Tables /> },
      { path: '/quiz', element: <Quiz /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
