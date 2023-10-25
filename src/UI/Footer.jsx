import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailIcon from '@mui/icons-material/Email';
import Image from './Image';

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 7fr 4fr 4fr;
  gap: 20px;
  padding: 20px;
  background-color: #555;
  color: #fff;
  letter-spacing: 1px;
  font-size: 1.1rem;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  height: 100%;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Top = styled.div`
  font-size: 1.75rem;
  letter-spacing: 2px;
`;

const Bottom = styled.div`
  font-size: 1.75rem;
  letter-spacing: 4px;
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: -4px;
  justify-content: space-around;
  gap: 11px;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Icon = styled.div`
  display: inline-block;
  position: relative;
  top: 6px;
`;

const Links = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

function Footer({ withAboutUs = true }) {
  return (
    <StyledFooter>
      <LogoSection>
        <Image
          imageLink='../../images/logos/LanguageCenterLogo.png'
          href='https://centers.ju.edu.jo/ar/ujlc/'
          alt='Languages Center Logo'
          height={'100px'}
        />
        <Title>
          <Top>مركز اللغات</Top>
          <Bottom>Language Center</Bottom>
        </Title>
      </LogoSection>

      <Column1>
        {withAboutUs && (
          <>
            <Link to='/'>About Us</Link>
            <Links href='#'>Submit Feedback</Links>
            <Links href='#'>Report Problems</Links>
          </>
        )}
      </Column1>

      <Column2>
        <Item name={' (06) 535 5000'}>
          <PhoneIcon />
        </Item>
        <Item name={' ujlc@ju.edu.jo'}>
          <EmailIcon />
        </Item>
        <Links
          href='https://www.facebook.com/people/Language-Center-University-of-Jordan/100089620122123/?sk=about'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Item name={' Language Center'}>
            <FacebookRoundedIcon />
          </Item>
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
