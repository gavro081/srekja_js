import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <FooterContainer>
            <FooterSection>
                <img src="/public/slikiZaEshop/darkLogo!.png" style={{height:'20px',width:'20px'}}/>
                <SocialLinks>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/social/ig2.svg" alt="Instagram" />
                    </a>
                    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/social/x2.svg" alt="Twitter" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/social/fb2.svg" alt="LinkedIn" />
                    </a>
                </SocialLinks>
            </FooterSection>
            <FooterSection style={{marginLeft:'600px'}}>
                <h3>ИСТРАЖИ</h3>
                <QuickLinks>
                    <FooterLink to="/">Home</FooterLink>
                    <FooterLink to="/shop">Shop</FooterLink>
                    <FooterLink to="/about">About Us</FooterLink>
                    <FooterLink to="/contact">Contact</FooterLink>
                </QuickLinks>
            </FooterSection>
            <FooterSection>
                <h3>КОНТАКТ</h3>
                <ContactInfo>
                    <p>Address: 123 Main Street, City, Country</p>
                    <p>Phone: +123 456 7890</p>
                </ContactInfo>
            </FooterSection>
        </FooterContainer>
    );
}



const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    padding: 70px 20px;
    border-radius:0 ;
    background-color: #0B776F;
    color: white;
    position: absolute;
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

    &:hover {
        text-decoration: underline;
    }
`;

const ContactInfo = styled.div`
    text-align: center;
`;