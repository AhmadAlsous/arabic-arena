import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import '@mui/styled-engine-sc';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Layout from './pages/Layout';
import Lessons from './features/lessons/Lessons';
import Lesson from './features/lesson/Lesson';
import Forum from './features/Forum';
import VocabularyTables from './features/VocabularyTables';
import Quiz from './features/Quiz';
import GlobalStyle from './GlobalStyle';
import PlacementTest from './features/PlacementTest';
import Settings from './features/Settings';
import Table from './features/table/Table';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  {
    element: <Layout />,
    children: [
      { path: '/learn', element: <Lessons /> },
      { path: '/learn/:lesson', element: <Lesson /> },
      { path: '/ask', element: <Forum /> },
      { path: '/vocabulary', element: <VocabularyTables /> },
      { path: '/vocabulary/:table', element: <Table /> },
      { path: '/quiz', element: <Quiz /> },
      { path: '/quiz/:quiz', element: <Quiz /> },
      { path: '/placement', element: <PlacementTest /> },
      { path: '/settings', element: <Settings /> },
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
