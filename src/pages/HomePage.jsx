import HomePageBar from '../UI/homepage/HomePageBar';
import LazyImage from '../UI/homepage/LazyImage';
import OverviewContainer from '../UI/homepage/OverviewContainer';
import Footer from '../UI/footer/Footer';
import Features from '../UI/homepage/Features';
import { useIsAuthenticated } from '@azure/msal-react';
import NavBar from '../UI/header/NavBar';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { fetchLessons } from '../services/lessonService';
import { greenTeaLesson } from '../data/GreenTea';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  background-color: var(--homepage-blue);
`;

function HomePage() {
  const [lessons, setLessons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLessons = async () => {
      try {
        const lessonsData = await fetchLessons();
        setLessons(lessonsData);
        console.log(lessonsData);
      } catch (err) {
        setError(err.message);
      }
    };

    getLessons();
  }, []);

  const addLessonHandler = async (lesson) => {
    try {
      const response = await fetch(
        'https://arabicarena.azurewebsites.net/lessons',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(lesson),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error adding lesson:', error);
    }
  };
  const isAuthenticated = useIsAuthenticated();
  return isAuthenticated ? (
    <>
      <AppWrapper>
        <Content>
          <NavBar isHomepage={true} />
          <LazyImage src='../images/homePageImage.jpg' alt='coverPhoto' />
          <OverviewContainer />
          <Features />
        </Content>
        <Footer withAboutUs={false} />
      </AppWrapper>
    </>
  ) : (
    <>
      <HomePageBar />
      <button onClick={() => addLessonHandler(greenTeaLesson)}>
        Add Lesson
      </button>
      <LazyImage src='../images/homePageImage.jpg' alt='coverPhoto' />
      <OverviewContainer />
      <Features />
      <Footer withAboutUs={false} />
    </>
  );
}

export default HomePage;
