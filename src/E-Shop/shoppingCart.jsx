import Navbar from '../shumaComponents/Navbar';
import Footer from '../shumaComponents/Footer';
import styled, { createGlobalStyle, css } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useState, useEffect } from 'react';

function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [vkupnoProizvodi, setVkupnoProizvodi] = useState(0);
  const [vkupnoCena, setVkupnoCena] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCartItems = async () => {
      const querySnapsot = await getDocs(collection(db, 'shoppingCart'));
      const items = querySnapsot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(items);
    };
    fetchCartItems();
  }, []);
  const handleRemoveItem = async (id) => {
    try {
      await deleteDoc(doc(db, 'shoppingCart', id));
      setProducts(products.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };
  useEffect(() => {
    let vkupnoProizvodi = 0;
    let vkupnoCena = 0;
    products.forEach((product) => {
      vkupnoProizvodi += product.selected;
      vkupnoCena += product.selected * product.price;
    });
    setVkupnoProizvodi(vkupnoProizvodi);
    setVkupnoCena(vkupnoCena);
  }, [products]);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainWrapper>
        <h2>
          Во вашата кошничка{' '}
          {vkupnoProizvodi > 0 ? (
            <>
              имате{' '}
              <span style={{ color: 'rgba(11, 119, 111, 0.95)' }}>
                {vkupnoProizvodi}
              </span>{' '}
              {vkupnoProizvodi === 1 ? 'производ' : 'производи'}
            </>
          ) : (
            'немате производи'
          )}
        </h2>
        <MainCartWrapper>
          <Naslovi>
            <p>Производ</p>
            <p>Име на производ</p>
            <p style={{ textAlign: 'center' }}>Количина</p>
            <p style={{ textAlign: 'center' }}>Големина</p>
            <p style={{ textAlign: 'center' }}>Цена</p>
          </Naslovi>
          <Produkti>
            {products.map((item, index) => (
              <ItemRow key={index}>
                <div>
                  <img src={item.img} />
                </div>
                <div>{item.name}</div>
                <div style={{ justifyContent: 'center' }}>{item.selected}</div>
                <div style={{ justifyContent: 'center' }}>
                  {item.selectedSize}
                </div>
                <div style={{ justifyContent: 'center' }}>
                  {item.price}
                  <span> ден.</span>
                </div>
                <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                  Отстрани
                </RemoveButton>
              </ItemRow>
            ))}
          </Produkti>
          <ShopInfo>
            <p
              style={{
                position: 'absolute',
                right: '2%',
                top: '5%',
                fontWeight: 'bold',
              }}
            >
              Вкупно: {vkupnoCena} ден.
            </p>
            <button
              onClick={() => navigate('/mainEshopPage')}
              style={{ marginLeft: 0, marginRight: 'auto', width: '20%' }}
            >
              НАЗАД
            </button>{' '}
            <button>ПОТВРДИ ЈА НАРАЧКАТА</button>
          </ShopInfo>
        </MainCartWrapper>
      </MainWrapper>
      <Footer />
    </>
  );
}

const ShopInfo = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  position: relative;
  justify-content: flex-end;

  button {
    width: 30%;
    height: 30%;
    margin-bottom: 0;
    margin-top: auto;
    background-color: rgba(11, 119, 111, 0.95);
    color: white;
    border: 1px solid black;
    margin-bottom: 30px;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: rgba(11, 119, 111, 0.8);
    }
  }
`;
const Produkti = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  overflow: auto;
`;
const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  width: 100%;
  position: relative;
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
  p {
    &:hover {
      color: red;
    }
  }
`;
const RemoveButton = styled.p`
  position: absolute;
  right: 5%;
  top: 30%;
  color: grey;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
const Naslovi = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid rgba(128, 134, 134, 0.95);
  border-top: 1px solid rgba(128, 134, 134, 0.95);
  border-radius: 0px !important;
  width: 100%;
  height: 50px;
  p {
    font-weight: bold;
    color: black;
    padding: 10px;
  }
`;

const MainCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  height: 70%;
  width: 80%;

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
