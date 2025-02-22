import styled, { createGlobalStyle } from 'styled-components';
import { useLocation } from 'react-router-dom';

import { Link, useNavigate } from 'react-router-dom';

import { useEffect, useState, useRef } from 'react';
import Navbar from '../shumaComponents/Navbar.jsx';
import Footer from '../shumaComponents/Footer.jsx';

function StartUpsListings() {
  const [startUps, setStartUps] = useState([]);
  const [events, setEvents] = useState([]);
  let [displayedText, setDisplayedText] = useState('');
  const fullText = 'Среќа е...да се биде иновативен!';
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

  useEffect(() => {
    fetch('/startUpsListing.json')
      .then((response) => response.json())
      .then((data) => setStartUps(data))
      .catch((error) => console.error('Error fetching the JSON data:', error));
  }, []);
  useEffect(() => {
    fetch('/nastani.json')
      .then((response) => response.json())
      .then((data) => setEvents(data.slice(0, 3)))
      .catch((error) => console.error('Error fetching the JSON data:', error));
  }, []);

  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <h2 style={{ textAlign: 'center', marginBottom: '5%' }}>
          Најнови настани
        </h2>
        <Events>
          {events.map((item, index) => (
            <Post key={index}>
              <Overlay style={{ backgroundImage: `url(${item.img})` }} />
              <Content>
                <Title>{item.title}</Title>
                <ShortDescription>{item.short_description}</ShortDescription>
              </Content>
              <DescriptionOverlay>
                <Description1>{item.description}</Description1>
                <DateTime>
                  <p>{item.date} </p>
                  <p>{item.time}</p>
                </DateTime>
              </DescriptionOverlay>
            </Post>
          ))}
        </Events>
      </MainWrapper>
    </>
  );
}
const DateTime = styled.p`
  margin: 5px 0;
  text-align: center;
`;
const DescriptionOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0px !important;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  transition: opacity 0.3s ease-in-out;
  padding: 20px;
  box-sizing: border-box;
`;

const Description = styled.p`
  margin: 0;
  text-align: center;
`;
const Content = styled.div`
  // position: relative;
  z-index: 1;
  fontweight: bold;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.7; /* Adjust the opacity as needed */
  z-index: -1;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* Dark overlay */
  }
`;
const Events = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  gap: 20px;
  width: 100%;
`;
const Title = styled.h3`
  margin: 0;
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;
const ShortDescription = styled.p`
  margin: 5px 0;
  font-weight: bold;
`;
const Post = styled.div`
  width: 340px;
  height: 400px;
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
  }
  &:hover ${DescriptionOverlay} {
    opacity: 0.3;
  }
  &:hover ${DescriptionOverlay} {
    opacity: 1;
  }
  &:hover ${Title}, &:hover ${ShortDescription} {
    opacity: 0;
  }
`;

const Description1 = styled.p`
  margin: 5px 0;
`;
const MainWrapper = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 5%;
  margin-bottom: 45%;
`;

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
export default StartUpsListings;
