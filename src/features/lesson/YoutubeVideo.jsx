import styled from 'styled-components';
import { constructEmbedUrl } from '../../utility/stringOperations';

const Container = styled.div`
  width: 90%;
  padding: 0 10%;
`;

const StyledYoutubeVideo = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border: 1px solid #eee;
  box-shadow: 0 5px 20px 2px #ddd;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

function YoutubeVideo({ url }) {
  const embedUrl = constructEmbedUrl(url);
  return (
    <Container>
      <StyledYoutubeVideo>
        <iframe
          src={embedUrl}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen={true}
        ></iframe>
      </StyledYoutubeVideo>
    </Container>
  );
}

export default YoutubeVideo;
