import styled from 'styled-components';
import OverviewBox from './OverviewBox';

const StyledOverviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px 60px;
  justify-items: center;
  width: 85%;
  background-color: var(--homepage-grey);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    width: 50%;
  }
`;

const OverviewBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--homepage-grey);
  padding: 10px 0 40px 0;
`;

function OverviewContainer() {
  return (
    <OverviewBar>
      <StyledOverviewContainer>
        <OverviewBox title='Who Are We'>
          The Language Center at the University of Jordan was established in
          1979 with a view to opening up to the local and global communities and
          teach Arabic to non-native speakers from all over the globe.
        </OverviewBox>
        <OverviewBox title='Our Vision'>
          We look to be active at the local and global hub, particularly in
          teaching Arabic to non-Arabic speakers. Our vision is not only limited
          to language instruction but also extends for the Center to be a
          leading research facility.
        </OverviewBox>
        <OverviewBox title='Our Mission'>
          Our mission is to provide first class education and support the
          linguistic, social and cultural development of our students through
          talented instructors from the native community and through a positive
          learning environment.
        </OverviewBox>
        <OverviewBox title='Arabic Arena'>
          A comprehensive learning platform dedicated to providing immersive and
          tailored Arabic language education, designed to cater to all
          proficiency levels, while ensureing an engaging journey for every
          student learning Arabic.
        </OverviewBox>
      </StyledOverviewContainer>
    </OverviewBar>
  );
}

export default OverviewContainer;
