import Navbar from '../shumaComponents/Navbar';
import Footer from '../shumaComponents/Footer';
import styled, { createGlobalStyle } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

function Filtered() {
  const location = useLocation();
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const { text } = location.state || {};
  const [selectedFilters, setSelectedFilters] = useState({
    site: false,
    maici: false,
    dukseri: false,
    casi: false,
  });
  useEffect(() => {
    if (text) {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        [text]: true,
      }));
    }
  }, [text]);
  const handleFilterChange = (e) => {
    const { id, checked } = e.target;
    setSelectedFilters({
      ...selectedFilters,
      [id]: checked,
    });
  };

  useEffect(() => {
    fetch('../../public/products.json')
      .then((response) => response.json())
      .then((json) => {
        setAllProducts(json);
        if (text) {
          const filteredItems = json.filter((product) => product.type === text);
          setProducts(filteredItems);
        } else {
          setProducts(json);
        }
      });
  }, []);

  const filterItems = () => {
    const selectedTupes = Object.keys(selectedFilters).filter(
      (key) => selectedFilters[key]
    );
    if (selectedTupes.length === 0 || selectedTupes.includes('site')) {
      setProducts(allProducts);
    } else {
      const filteredItems = allProducts.filter((product) =>
        selectedTupes.includes(product.type)
      );
      setProducts(filteredItems);
    }
  };

  const handleProductClick = (product) => {
    navigate('/singleProductPage', { state: { product } });
  };

  return (
    <>
      <GlobalStyle />
      <Navbar />

      <MainWrapper>
        <FilterWrapper>
          <Filter>
            <p>Одбери</p>
            <FilterContainer>
              <FilterCheckbox>
                <label>
                  <input
                    type="checkbox"
                    id="site"
                    value="site"
                    checked={selectedFilters.site}
                    onChange={handleFilterChange}
                  />
                  <span>Сите</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    id="maici"
                    value="maici"
                    checked={selectedFilters.maici}
                    onChange={handleFilterChange}
                  />
                  <span>Маици</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    id="dukseri"
                    value="dukseri"
                    checked={selectedFilters.dukseri}
                    onChange={handleFilterChange}
                  />
                  <span>Дуксери</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    id="casi"
                    value="casi"
                    checked={selectedFilters.casi}
                    onChange={handleFilterChange}
                  />
                  <span>Чаши</span>
                </label>
              </FilterCheckbox>
            </FilterContainer>
            <FilterButton onClick={filterItems}>Филтрирај</FilterButton>
          </Filter>
        </FilterWrapper>
        <ProductsWrapper>
          {products.map((product) => {
            console.log(product);
            return (
              <ProductCard
                key={product.name}
                title={product.name}
                onClick={() => handleProductClick(product)}
              >
                <h3>{product.name}</h3>
                <img
                  src={product.img}
                  alt={product.name}
                  className={product.type == 'casi' ? 'mugPic' : ''}
                />
                {product.type == 'casi' && <p>159 ден</p>}
                {product.type == 'maici' && <p>399 ден</p>}
                {product.type == 'dukseri' && <p>799 ден</p>}
              </ProductCard>
            );
          })}
        </ProductsWrapper>
      </MainWrapper>

      <Footer />
    </>
  );
}

const ProductsWrapper = styled.div`
  width: 90%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const ProductCard = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid black;
  margin: 10px;
  display: flex;
  margin-bottom: 5%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 4px 8px rgba(70, 68, 68, 0.5); /* Soft bottom shadow */
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.01); /* Slightly increase size */
    box-shadow: 0 8px 16px rgba(70, 68, 68, 0.7); /* Harder shadow */
  }
  h3 {
    position: absolute;
    top: 0;
    max-width: 180px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  img {
    width: 100%;
    height: 60%;
  }
  & img.mugPic {
    width: 140%;
    height: 75%;
  }

  p {
    position: absolute;
    color: grey;
    text-decoration: underline;
    font-style: italic;
    bottom: 5%;
    margin: 5px 0;
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
const FilterButton = styled.button`
  height: 60px;
  border: none;
  color: white;
  background-color: #0b776f;
  border-radius: 0% !important;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: rgb(9, 94, 88);
    border: none;
    color: lightgrey;
  }
`;
const FilterIminja = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
const FilterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const FilterCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  justify-content: space-around;
  margin-left: 5%;
  margin-top: 11%;
  label {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  input {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  span {
    font-size: 16px;
    margin-left: 6%;
  }
`;

const FilterWrapper = styled.div`
  width: 60%;
  height: 80%;

  display: flex;
`;

const Filter = styled.div`
  width: 50%;
  height: 60%;
  border: 1px solid black;
  margin-left: 5%;
  border-radius: 0% !important;
  display: flex;
  flex-direction: column;

  & > p {
    font-size: 20px;
    margin-top: 2%;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
  }
`;
const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  margin-bottom: 20%;
  margin-top: 5%;
`;

export default Filtered;
