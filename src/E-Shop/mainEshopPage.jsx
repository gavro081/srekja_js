import styled, { createGlobalStyle } from 'styled-components';
import { useLocation } from 'react-router-dom';
import mugText2 from './sliki/mugText2.png';
import { Link, useNavigate } from 'react-router-dom';
import whiteFrontLogo from './sliki/whiteFrontLogo.png';
import sweatshirtText1 from './sliki/sweatshirtText1.png';
import { useEffect, useState, useRef } from 'react';
import Navbar from '../shumaComponents/Navbar.jsx';
import Footer from '../shumaComponents/Footer.jsx';

function MainEshopPage() {
  let [displayedText, setDisplayedText] = useState('');
  const fullText = 'Среќа е...да одиш на шопинг!';
  const indexRef = useRef(0); // Store index persistently
  const navigate = useNavigate();
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((displayedText += fullText[index]));

        index++;
        if (
          index >= 2 &&
          fullText[index] === '.' &&
          fullText[index - 1] === '.' &&
          fullText[index - 2] === '.'
        ) {
          clearInterval(interval);
          setTimeout(() => {
            const fastInterval = setInterval(() => {
              if (index < fullText.length) {
                setDisplayedText((displayedText += fullText[index]));
                index++;
              } else {
                clearInterval(fastInterval);
              }
            }, 70); // Faster interval for the rest of the text
          }, 1000); // Pause after the third dot
        }
      } else {
        clearInterval(interval);
      }
    }, 100); // Initial interval for the first part of the text

    return () => clearInterval(interval);
  }, []);

  const handleLinkClick = (text) => {
    console.log(text);
    navigate('/filtered', { state: { text } });
  };
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Naslovce>
        <h2>{displayedText}</h2>
      </Naslovce>

      <MainWrapper>
        <Wrapper className="mainProductsContainer">
          <ProductCard className="mainTshirtContainer">
            <h3>Маици</h3>
            <img src={whiteFrontLogo} className="maica" />
            <StyledLink as="div" onClick={() => handleLinkClick('maici')}>
              {' '}
              <p>Види ги сите</p>
            </StyledLink>
          </ProductCard>
          <ProductCard className="mainHoodieContainer">
            <h3>Дуксери</h3> <img src={sweatshirtText1} alt="" />
            <StyledLink as="div" onClick={() => handleLinkClick('dukseri')}>
              {' '}
              <p>Види ги сите</p>
            </StyledLink>
          </ProductCard>
          <ProductCard className="mainMugContainer">
            <h3>Чаши</h3>
            <img src={mugText2} alt="mug" className="mug" />
            <StyledLink
              as="div"
              className="mugText"
              onClick={() => handleLinkClick('casi')}
            >
              {' '}
              <p className="mugText">Види ги сите</p>
            </StyledLink>
          </ProductCard>
        </Wrapper>
      </MainWrapper>
      <Footer />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
const Naslovce = styled.div`
  text-align: center;
  margin-top: 5%;
  margin-bottom: 0%;
  font-size: 21px;
`;

const MainWrapper = styled.div`
  width: 100%;
  height: 80%;
  overflow: hidden;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 90%;
  margin-top: 7%;
  justify-content: space-around;
`;
const StyledLink = styled(Link)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 8%;
  text-decoration: underline;
  color: grey;
  cursor: pointer;

  &.mugText {
    left: 53%;
  }
`;
const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 25%;
  height: 80%;
  border-top: 0px;
  border-left: 0px;
  border-radius: 0% !important;
  align-items: center;
  position: relative;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add transition for smooth zoom */
  ]
  & > h3 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 2%;
    font-size: 22px;
  }
  &:hover {
    border-top: 1px;
    border-left: 1px;
    transform: scale(1.05); /* Make the card larger on hover */
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 1); /* Enhance shadow on hover */
  }
  & > p {
  }
  &.mainMugContainer > p {
  }

  & > img {
    width: 80%;
    height: 60%;
    margin-top: 15%;
  }
  & > img.mug {
    width: 100%;
  }
  & > img.maica {
    margin-top: 15%;
    height: 60%;
  }
`;

export default MainEshopPage;
