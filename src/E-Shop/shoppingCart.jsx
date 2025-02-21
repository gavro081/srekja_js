import Navbar from '../shumaComponents/Navbar';
import Footer from '../shumaComponents/Footer';
import styled, { createGlobalStyle, css } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useState, useEffect } from 'react';

function ShoppingCart() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchCartItems = async () => {
      const querySnapsot = await getDocs(collection(db, 'shoppingCart'));
      const items = querySnapsot.docs.map((doc) => doc.data());
      setProducts(items);
    };
    fetchCartItems();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainWrapper>
        <h2>Кошничка</h2>
        <MainCartWrapper>
          <Naslovi>
            <p>Производ</p>
            <p>Име на производ</p>
            <p>Количина</p>
            <p>Големина</p>
            <p>Цена</p>
          </Naslovi>
          {products.map((item, index) => (
            <ItemRow key={index}>
              <div>
                <img src={item.img} />
              </div>
              <div>{item.name}</div>
              <div>{item.selectedSize}</div>
              <div>{item.price}</div>
            </ItemRow>
          ))}
        </MainCartWrapper>
      </MainWrapper>
      <Footer />
    </>
  );
}
const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  width: 100%;
  div {
    padding: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  img {
    width: 50%;
    height: auto;
  }
`;
const Naslovi = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  width: 100%;
  p {
    font-weight: bold;
    color: grey;
    padding: 10px;
  }
`;

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
