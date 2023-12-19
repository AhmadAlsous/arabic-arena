import styled from 'styled-components';
import MenuComponent from '../../UI/header/Menu';

const StyledLessonsBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  align-items: center;
  border-bottom: 1.5px solid #888888;
  left: 10%;
`;

const TypesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  font-size: 0.9rem;
  margin-right: 30px;
  color: #555;

  @media (max-width: 1100px) {
    width: 320px;
  }
`;

const ButtonContainer = styled.span`
  display: inline-block;
  width: 100px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 5px;
`;

function LessonsBar({
  status,
  level,
  type,
  onChangeStatus,
  onChangeLevel,
  onChangeType,
  isQuiz,
}) {
  const statusItems = ['All', 'Complete', 'Incomplete'];
  const typeItems = [
    'All',
    'Grammar',
    'Vocabulary',
    'Listening',
    'Writing',
    'Reading',
  ];
  const levelItems = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <StyledLessonsBar>
      <Title>{isQuiz ? 'QUIZZES' : 'LESSONS'}</Title>
      <TypesContainer type={type}>
        <div>
          Status
          <MenuComponent
            selectedValue={status}
            onChange={onChangeStatus}
            items={statusItems}
          />
        </div>
        <div>
          Type
          <MenuComponent
            selectedValue={type}
            onChange={onChangeType}
            items={typeItems}
          />
        </div>
        <div>
          Level
          <ButtonContainer>
            <MenuComponent
              selectedValue={level}
              onChange={onChangeLevel}
              items={levelItems}
            />
          </ButtonContainer>
        </div>
      </TypesContainer>
    </StyledLessonsBar>
  );
}

export default LessonsBar;
