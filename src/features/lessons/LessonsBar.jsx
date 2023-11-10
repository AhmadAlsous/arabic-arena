import styled from 'styled-components';
import MenuComponent from '../../UI/Menu';

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
  width: ${(props) => (props.type === undefined ? '135px' : '350px')};
  font-size: 0.9rem;
  margin-right: 30px;
`;

const ButtonContainer = styled.span`
  display: inline-block;
  width: 100px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 8px;
`;

function LessonsBar({ level, type, onChangeLevel, onChangeType, title }) {
  const typeItems = ['All', 'Grammar', 'Listening', 'Writing', 'Reading'];
  const levelItems = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <StyledLessonsBar>
      <Title>{title}</Title>
      <TypesContainer type={type}>
        {type && (
          <div>
            Type
            <MenuComponent
              selectedValue={type}
              onChange={onChangeType}
              items={typeItems}
            />
          </div>
        )}
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
