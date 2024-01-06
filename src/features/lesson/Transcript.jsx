import { useState } from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import Divider from '@mui/material/Divider';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledTranscript = styled.div`
  margin-top: 20px;
  padding: 0 10%;
  width: 90%;

  @media (max-width: 1000px) {
    padding: 0 7%;
  }

  @media (max-width: 500px) {
    padding: 0 4%;
  }
`;

const Shadow = styled.div`
  box-shadow: 0 5px 20px 2px #ddd;
`;

const Summary = styled.h4`
  font-weight: 500;
  margin: 0;
  letter-spacing: 1px;
`;

const Text = styled(AccordionDetails)`
  margin: 10px 0 0 0;
  font-family: 'Greta', 'Arial', 'Helvetica', sans-serif;
  line-height: 1.4;
  font-size: 1.1rem;
  color: #333;
`;

function Transcript({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <StyledTranscript>
      <Shadow>
        <Accordion expanded={isExpanded} onChange={toggleAccordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Summary>
              {isExpanded ? 'Hide Video Transcript' : 'Show Video Transcript'}
            </Summary>
          </AccordionSummary>
          <Divider />
          <Text
            dangerouslySetInnerHTML={{
              __html: children,
            }}
          />
        </Accordion>
      </Shadow>
    </StyledTranscript>
  );
}

export default Transcript;
