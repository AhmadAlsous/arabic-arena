import styled from 'styled-components';
import { LinkReset } from '../../utility/LinkReset';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailIcon from '@mui/icons-material/Email';
import Modal from '../Modal';
import FeedbackForm from './FeedbackForm';
import { useMutation } from '@tanstack/react-query';
import { createFeedback } from '../../services/userServices';
import { UserContext } from '../../features/UserContext';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 8fr 4fr 4fr;
  gap: 20px;
  padding: 40px 20px;
  background-color: #555;
  color: #fff;
  letter-spacing: 1px;
  font-size: 1.1rem;
  grid-template-areas: 'column1 column2 column3';

  @media (max-width: 828px) {
    grid-template-columns: ${(props) =>
      props.$withAboutUs ? '1fr 1fr' : '1fr'};
    grid-template-areas: ${(props) =>
      props.$withAboutUs
        ? "'column1 column1' 'column2 column3'"
        : "'column1' 'column3'"};
  }
`;

const LogoSection = styled.div`
  grid-area: column1;
  display: flex;
  align-items: center;

  @media (max-width: 828px) {
    justify-content: center;
  }
`;

const Title = styled.div`
  height: 100%;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Top = styled.div`
  font-size: 1.8rem;
  letter-spacing: 1.3px;
  font-family: 'Al-Jazeera';
  margin-bottom: -10px;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Bottom = styled.div`
  font-size: 1.75rem;
  letter-spacing: 4px;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Column1 = styled.div`
  grid-area: column2;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: -4px;
  justify-content: space-around;
  gap: 11px;

  @media (max-width: 828px) {
    align-items: center;
  }

  @media (max-width: 500px) {
    font-size: 0.9rem;
    align-items: flex-start;
  }
`;

const Column2 = styled.div`
  grid-area: column3;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: ${(props) => (props.$withAboutUs ? 'flex-start' : 'center')};

  @media (max-width: 828px) {
    align-items: center;
  }

  @media (max-width: 500px) {
    font-size: ${(props) => (props.$withAboutUs ? '0.9rem' : '1.1rem')};
    align-items: ${(props) => (props.$withAboutUs ? 'flex-end' : 'center')};
  }
`;

const Icon = styled.div`
  display: inline-block;
  position: relative;
  top: 6px;
`;

const Links = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;

  &:hover {
    border-bottom: 1px solid #fff;
  }
`;

const ModalTitle = styled.h4`
  margin: 0 0 30px 0;
  font-size: 1.75rem;
  letter-spacing: 1px;
  font-weight: 700;
`;

const Text = styled.p`
  line-height: 1.5;
`;

const FooterImage = styled.img`
  height: 100px;

  @media (max-width: 600px) {
    height: 80px;
  }
`;

function Footer({ withAboutUs = true }) {
  const [feedbackText, setFeedbackText] = useState('');
  const [problemText, setProblemText] = useState('');
  const { user } = useContext(UserContext);
  const addFeedback = useMutation({
    mutationFn: (feedback) => createFeedback(feedback),
  });
  const handleSubmit = (type) => {
    const text = type === 'feedback' ? feedbackText : problemText;
    if (!text) {
      toast.error(`Invalid ${type} text`);
      return;
    }
    const feedback = {
      id: Date.now().toString(),
      name: `${user.firstName} ${user.lastName}`,
      type,
      text: type === 'feedback' ? feedbackText : problemText,
    };
    addFeedback.mutate(feedback);
  };
  return (
    <StyledFooter $withAboutUs={withAboutUs}>
      <LogoSection>
        <a
          href='https://centers.ju.edu.jo/ar/ujlc/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FooterImage
            src='../../images/logos/LanguageCenterLogo.png'
            alt='Languages Center Logo'
          />
        </a>
        <Title>
          <Top>مركز اللغات</Top>
          <Bottom>Language Center</Bottom>
        </Title>
      </LogoSection>

      <Column1>
        {withAboutUs && (
          <>
            <LinkReset to='/'>
              <Button>About Us</Button>
            </LinkReset>
            <Modal
              trigger={<Button>Submit Feedback</Button>}
              width={'600px'}
              btn='Submit'
              onClose={() => setFeedbackText('')}
              onSubmit={() => handleSubmit('feedback')}
            >
              <FeedbackForm
                type='feedback'
                text={feedbackText}
                setText={setFeedbackText}
              >
                <ModalTitle>Share Your Feedback</ModalTitle>
                <Text>
                  Thank you for sending us your feedback. We can't respond
                  individually but we appreciate your feedback and we will make
                  sure pass it on to the team who are working to help make our
                  website better.
                </Text>
                <Text>
                  Please enter your feedback in the box below and then press
                  submit.
                </Text>
              </FeedbackForm>
            </Modal>
            <Modal
              trigger={<Button>Report Problems</Button>}
              width={'600px'}
              btn='Submit'
              onClose={() => setProblemText('')}
              onSubmit={() => handleSubmit('problem')}
            >
              <FeedbackForm
                type='problem'
                text={problemText}
                setText={setProblemText}
              >
                <ModalTitle>Report a Problem</ModalTitle>
                <Text>
                  Thank you for taking the time to report a problem. We can't
                  respond individually but we appreciate your feedback and we
                  will make sure pass it on to the team who are working to help
                  make our website better.
                </Text>
                <Text>
                  Please enter your problem in the box below and then press
                  submit.
                </Text>
              </FeedbackForm>
            </Modal>
          </>
        )}
      </Column1>

      <Column2 $withAboutUs={withAboutUs}>
        <Item name={' (06) 535 5000'}>
          <PhoneIcon />
        </Item>
        <Item name={' ujlc@ju.edu.jo'}>
          <EmailIcon />
        </Item>
        <Links>
          <a
            href='https://www.facebook.com/people/Language-Center-University-of-Jordan/100089620122123/?sk=about'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Item name={' Language Center'}>
              <FacebookRoundedIcon />
            </Item>
          </a>
        </Links>
      </Column2>
    </StyledFooter>
  );
}

function Item({ children, name }) {
  return (
    <span>
      <Icon>{children}</Icon>
      {name}
    </span>
  );
}

export default Footer;
