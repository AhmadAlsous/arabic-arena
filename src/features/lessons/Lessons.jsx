import { useState } from 'react';
import styled from 'styled-components';
import LessonsBar from './LessonsBar';
import LessonsContainer from './LessonsContainer';
import Pagination from '../../UI/Pagination';
import { dummyLessons } from '../../data/DummyLessons';

const StyledLessonsContainer = styled.div`
  background-color: #ffffff;
  margin: 50px 15%;
  padding: 0 50px 20px 50px;
  box-shadow: 0 5px 20px 3px grey;
`;

const lessons = dummyLessons;

function Lessons() {
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const filteredLessons = lessons.filter(
    (lesson) =>
      (selectedLevel === 'All' || lesson.level === selectedLevel) &&
      (selectedType === 'All' || lesson.type === selectedType)
  );

  return (
    <StyledLessonsContainer>
      <LessonsBar
        level={selectedLevel}
        type={selectedType}
        onChangeLevel={setSelectedLevel}
        onChangeType={setSelectedType}
      />
      <LessonsContainer lessons={filteredLessons} />
      <Pagination count={filteredLessons.length} />
    </StyledLessonsContainer>
  );
}

export default Lessons;
