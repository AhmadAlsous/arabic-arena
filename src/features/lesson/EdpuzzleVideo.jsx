import styled from 'styled-components';
import { constructEmbedUrl } from '../../utility/stringOperations';

const Container = styled.div`
  width: 90%;
  padding: 0 10%;
`;

const StyledEdpuzzleVideo = styled.div`
  position: relative;
  width: 100%;
  padding-top: 92%;
  border: 1px solid #eee;
  box-shadow: 0 5px 20px 2px #ddd;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1050px) {
    padding-top: 86%;
  }

  @media (min-width: 1200px) {
    padding-top: 80%;
  }

  @media (min-width: 1357px) {
    padding-top: 78%;
  }

  @media (min-width: 1479px) {
    padding-top: 65.5%;
  }

  @media (min-width: 1792px) {
    padding-top: 63.5%;
  }
`;

function EdpuzzleVideo({ url }) {
  const embedUrl = constructEmbedUrl(url);
  return (
    <Container>
      <StyledEdpuzzleVideo>
        <iframe src={embedUrl} frameBorder='0' allowFullScreen={true}></iframe>
      </StyledEdpuzzleVideo>
    </Container>
  );
}

export default EdpuzzleVideo;
