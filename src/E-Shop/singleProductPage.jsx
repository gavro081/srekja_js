import Navbar from '../shumaComponents/Navbar';
import Footer from '../shumaComponents/Footer';
import styled, { createGlobalStyle, css } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

function SingleProductPage() {
  const location = useLocation();
  const [product, setProduct] = useState(location.state.product);
  const [mainImg, setMainImg] = useState(product.img);
  const [fade, setFade] = useState(false);
  const [products, setProducts] = useState([]);
  const [otherImages, setOtherImages] = useState(product.otherImages);
  const [size, setSize] = useState(product.sizes);
  const [selecetdSize, setSelectedSize] = useState(null);

  const availableSizes = ['XS', 'S', 'M', 'L', 'XL'];
  const handleImageClick = (img) => {
    setFade(true);
    setTimeout(() => {
      setMainImg(img);
      setFade(false);
    }, 300);
  };

  const handleChangeImageClick = (product) => {
    setFade(true);
    setTimeout(() => {
      setMainImg(product.img);
      setProduct(product);
      setOtherImages(product.otherImages);
      setSize(product.sizes);
      setSelectedSize(null);
      setFade(false);
    }, 300);
  };

  useEffect(() => {
    fetch('../../public/products.json')
      .then((response) => response.json())
      .then((json) => {
        const sugested = json.filter(
          (produkt) => produkt.type === product.type
        );
        setProducts(sugested);
      });
  }, []);
  const handleSizeClick = (sizeLabel) => {
    setSelectedSize(sizeLabel);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainWrapper>
        <PicturesWrapper>
          <MainPictureWrapper>
            <img
              src={mainImg}
              alt="mainPicture"
              className={`mainImg ${fade ? 'fade-out' : 'fade-in'}`}
            />
          </MainPictureWrapper>
          <OtherPicturesWrapper>
            {product.otherImages &&
              product.otherImages.map((img, index) => (
                <div
                  className="otherImg"
                  style={{
                    border:
                      img === mainImg
                        ? '2px solid rgba(11, 119, 111, 0.95)'
                        : '1px solid black',
                    boxShadow:
                      img === mainImg
                        ? '0 0 10px rgba(11, 119, 111, 0.3)'
                        : 'none',
                  }}
                  onClick={() => handleImageClick(img)}
                >
                  <img src={img} alt="otherPicture" key={index} />
                  {console.log(img)}
                </div>
              ))}
          </OtherPicturesWrapper>
        </PicturesWrapper>
        <InfoWrapper>
          <h3>{product.name}</h3>
          <p className="cena">
            <span
              style={{
                fontStyle: 'italic',
                color: 'black',
                fontSize: '20px',
              }}
            >
              {product.price}{' '}
            </span>
            <span
              style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}
            >
              {' '}
              ден.
            </span>
          </p>
          <p className="slicni" style={{ marginTop: '5%' }}>
            Слични производи:
          </p>

          <SuggestedWrapper>
            {products.map((suggestedProduct, index) => (
              <div
                key={index}
                className="suggestedProduct"
                style={{
                  cursor: 'pointer',
                  padding: '1%',
                  borderBottom:
                    suggestedProduct.img === mainImg
                      ? '2px solid rgba(11, 119, 111, 0.95)'
                      : '',

                  borderRadius: '0% !important',
                }}
                title={suggestedProduct.name}
                onClick={() => handleChangeImageClick(suggestedProduct)}
              >
                <img src={suggestedProduct.img} alt="suggestedProduct" />
              </div>
            ))}
          </SuggestedWrapper>
          <p>Избери големина:</p>
          <SizesWrapper>
            {availableSizes.map((sizeLabel) => (
              <SizeBox
                key={sizeLabel}
                title={size.includes(sizeLabel) ? '' : 'Нема на залиха'}
                isAvailable={size.includes(sizeLabel)}
                isSelected={selecetdSize === sizeLabel}
                onClick={() => {
                  if (size.includes(sizeLabel)) {
                    handleSizeClick(sizeLabel);
                  }
                }}
              >
                {sizeLabel}
              </SizeBox>
            ))}
          </SizesWrapper>
          <CartButton>
            <button>Додади во кошничка </button>
          </CartButton>
        </InfoWrapper>
      </MainWrapper>

      <Footer />
    </>
  );
}

const CartButton = styled.div`
  width: 100%;
  margin-top: 10%;
  & > button {
    width: 100%;
    height: 50px;
    background-color: rgba(11, 119, 111, 0.95);
    color: white;
    border: 0.5px solid rgba(186, 197, 196, 0.95);
    cursor: pointer;
    &:hover {
      background-color: rgba(11, 119, 111, 0.8);
    }
  }
`;
const SuggestedWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 20%;
  gap: 5%;
  margin-bottom: 5%;
  .suggestedProduct {
    width: 22%;
    height: 80%;
  }
  .suggestedProduct:hover {
    border: 2px solid rgba(11, 119, 111, 0.95);
  }
  .suggestedProduct > img {
    width: 100%;
    height: 100%;
  }
`;
const PicturesWrapper = styled.div`
  width: 40%;
  height: 80%;
  margin-left: 9%;
  border: 1px solid rgba(186, 197, 196, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SizesWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const SizeBox = styled.div`
  padding: 10px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isAvailable
      ? css`
          background-color: ${props.isSelected
            ? 'rgba(11, 119, 111, 0.95)'
            : 'white'};
          color: ${props.isSelected ? 'white' : 'black'};
          border: 1px solid black;
          border-radius: 0px !important;
          cursor: pointer;
          &:hover {
            background-color: rgba(11, 119, 111, 0.95);
            color: white;
          }
        `
      : css`
          color: grey;
          border: 1px solid grey;
          cursor: not-allowed;
          border-radius: 0px !important;
        `}
  border-radius: 5px;
`;
const MainPictureWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  .mainImg {
    width: 80%;
    height: 90%;
    margin-top: 5%;
    transition: opacity 0.3s ease-in-out; /* Add transition for smooth fade effect */
    opacity: 1;
  }
  .fade-out {
    opacity: 0;
  }
  .fade-in {
    opacity: 1;
  }
`;
const OtherPicturesWrapper = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  justify-content: center;
  align-items: center;
  .otherImg {
    width: 20%;
    height: 70%;
    margin: 1%;
    cursor: pointer;

    border-radius: 0px !important;
    padding: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .otherImg > img {
    width: 100%;
    height: 80%;
    background-color: white;
  }
`;

const InfoWrapper = styled.div`
  width: 30%;
  height: 80%;
  margin-left: 6%;
  display: flex;
  flex-direction: column;

  .cena {
    color: grey;

    font-size: 20px;
    font-style: italic;
  }
`;

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  margin-bottom: 10%;
`;
export default SingleProductPage;
