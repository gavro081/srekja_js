import Navbar from '../shumaComponents/Navbar';
import Footer from '../shumaComponents/Footer';
import styled, { createGlobalStyle, css } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

function ShoppingCart() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainWrapper>
        <h2>Кошничка</h2>
        <MainCartWrapper>
          <h1>Use se pravi</h1>
        </MainCartWrapper>
      </MainWrapper>
      <Footer />
    </>
  );
}

const MainCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  height: 60%;
  width: 80%;
  border: 1px solid black;
  margin-bottom: 50px;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 10%;
  margin-top: 5%;
`;
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
export default ShoppingCart;
