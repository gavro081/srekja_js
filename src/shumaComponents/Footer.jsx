import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterSection>
        <Link to="/">
          <img
            src="/public/slikiZaEshop/logo.png"
            style={{ height: "160px", width: "180px" }}
          />
        </Link>
        <Paragraph>
          Стартап Клуб Скопје помагаат на бизниси да се кренат на нозе т.е за
          остварување на идеи за start up. Тие снимаат поткасти и учестуваат во
          организизација на разни настани.
        </Paragraph>

        <Paragraph style={{ margin: "20px 0", textAlign: "center" }}>
          contact@srekja.mk
        </Paragraph>
        <SocialLinks>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/images/social/ig2.svg" alt="Instagram" />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/social/x2.svg" alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/images/social/fb2.svg" alt="LinkedIn" />
          </a>
        </SocialLinks>
      </FooterSection>
      <FooterSection style={{ marginLeft: "500px" }}>
        <Heading3>ИСТРАЖИ</Heading3>
        <QuickLinks>
          <FooterLink to="/">Почетна</FooterLink>
          <FooterLink to="/">Мени</FooterLink>
          <FooterLink to="/srekjaBar">Резервирај</FooterLink>
          <FooterLink to="/srekjaBar/reviews">Оцена</FooterLink>
          <FooterLink to="/">Среќни Производи</FooterLink>
          <FooterLink to="/">За Нас</FooterLink>
        </QuickLinks>
      </FooterSection>
      <FooterSection>
        <Heading3>КОНТАКТ</Heading3>
        <ContactInfo>
          <p>
            Адреса: 3та Македонска Бригада 60,
            <br />
            Скопје 1000 <br />
          </p>
          <br />
          <p>
            info@srekja.mk
            <br />
          </p>
          <br />
          <p>
            Инфо тел: 075 / 228-777
            <br />
          </p>
        </ContactInfo>
      </FooterSection>
    </FooterContainer>
  );
}

const Heading3 = styled.h3`
  font-size: 2rem;
  margin: 40px 0;
`;
const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  padding: 30px 160px;
  border-radius: 0;
  background-color: var(--logo-red);
  //margin-top: 70px;
  color: white;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;

  img {
    width: 30px;
    height: 30px;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-align: center;
  margin: 3px;
  &:hover {
    text-decoration: underline;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
`;

const Paragraph = styled.p`
  text-align: left;
  width: 30ch;
`;
