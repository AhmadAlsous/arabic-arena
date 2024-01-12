import styled from 'styled-components';
import Feature from './Feature';
import FeatureImage from './FeatureImage';

const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px 30px;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 80px 0;

  & > :nth-child(odd) {
    justify-self: end;
  }

  & > :nth-child(even) {
    justify-self: start;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0;

    & > :nth-child(odd) {
      justify-self: center;
    }

    & > :nth-child(even) {
      justify-self: center;
    }

    & > :nth-child(1) {
      order: 1;
    }

    & > :nth-child(2) {
      order: 2;
    }

    & > :nth-child(3) {
      order: 4;
    }

    & > :nth-child(4) {
      order: 3;
    }

    & > :nth-child(5) {
      order: 5;
    }

    & > :nth-child(6) {
      order: 6;
    }
  }
`;

function Features() {
  return (
    <StyledFeatures>
      <Feature className='feature' title='Take A Placement Test'>
        Begin your Arabic learning journey on the right foot with our placement
        test. Designed to accurately assess your current language proficiency,
        this test will guide you to the appropriate starting level, beginner,
        intermediate, or advanced. You'll receive a personalized learning path
        tailored to your unique needs and skills.
      </Feature>
      <FeatureImage
        className='feature-image'
        src='../../images/Placement.png'
        alt='Placement Test Character'
      />
      <FeatureImage
        className='feature-image'
        src='../../images/Studying.jpg'
        alt='Lessons Character'
      />
      <Feature className='feature' title='Explore Various Lessons'>
        Dive into a diverse selection of lessons tailored to different learning
        styles and levels. Whether you're starting with the basics or looking to
        refine advanced skills, our comprehensive lesson library is your gateway
        to mastering the Arabic language. Engage with interactive content and
        progress at your own pace on a journey of discovery.
      </Feature>
      <Feature className='feature' title='Test Your Knowledge'>
        Enhance your Arabic proficiency with our concise and targeted quizzes.
        Designed for all levels – beginner to advanced – these quizzes provide a
        quick yet effective way to assess and reinforce your learning. Our
        quizzes will help you identify strengths and areas for improvement,
        making your language journey both engaging and rewarding.
      </Feature>
      <FeatureImage
        className='feature-image'
        src='../../images/Test.webp'
        alt='Question Character'
      />
    </StyledFeatures>
  );
}

export default Features;
