import styled from 'styled-components';

const Styledfeature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  @media (max-width: 900px) {
    text-align: center;
  }

  @media (max-width: 900px) {
    width: 70%;
  }
`;

const FeatureTitle = styled.h4`
  font-size: 1.5rem;
  margin: 0 0 10px 0;
  font-family: 'Feather';
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  color: #444;
  font-family: 'Din-round';
`;

function Feature({ title, children }) {
  return (
    <Styledfeature>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{children}</FeatureDescription>
    </Styledfeature>
  );
}

export default Feature;
