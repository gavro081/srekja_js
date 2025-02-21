import styled, { keyframes, css } from "styled-components";

const gradientAnimation = keyframes`
  0% {
    border-color: #ccc;
    box-shadow: none;
  }
  20% {
    border-color: rgba(212, 30, 71, 0.3);
    box-shadow: inset 0 0 4px rgba(212, 30, 71, 0.2);
  }
  40% {
    border-color: rgba(212, 30, 71, 0.6);
    box-shadow: inset 0 0 6px rgba(212, 30, 71, 0.3);
  }
  60% {
    border-color: rgba(255, 126, 95, 0.6);
    box-shadow: inset 0 0 6px rgba(255, 126, 95, 0.3);
  }
  80% {
    border-color: rgba(212, 30, 71, 0.4);
    box-shadow: inset 0 0 4px rgba(212, 30, 71, 0.2);
  }
  100% {
    border-color: #ccc;
    box-shadow: none;
  }
`;

const gradientAnimation2 = keyframes`
  0% {
    border-color: #ccc;
    box-shadow: inset 0 0 2px rgba(212, 30, 71, 0.4);
  }
  15% {
    border-color: rgba(212, 30, 71, 0.2);
    box-shadow: inset 0 0 5px rgba(212, 30, 71, 0.5);
  }
  25% {
    border-color: rgba(212, 30, 71, 0.4);
    box-shadow: inset 0 0 8px rgba(212, 30, 71, 0.6);
  }
  35% {
    border-color: rgba(212, 30, 71, 0.6);
    box-shadow: inset 0 0 10px rgba(212, 30, 71, 0.7);
  }
  50% {
    border-color: rgba(212, 30, 71, 0.6);
    box-shadow: inset 0 0 15px rgba(255, 126, 95, 0.9);
  }
  65% {
    border-color: rgba(255, 126, 95, 0.6);
    box-shadow: inset 0 0 10px rgba(212, 30, 71, 0.7);
  }
  75% {
    border-color: rgba(212, 30, 71, 0.4);
    box-shadow: inset 0 0 8px rgba(212, 30, 71, 0.6);
  }
  85% {
    border-color: rgba(212, 30, 71, 0.2);
    box-shadow: inset 0 0 5px rgba(212, 30, 71, 0.5);
  }
  100% {
    border-color: #ccc;
    box-shadow: inset 0 0 2px rgba(212, 30, 71, 0.4);
  }
`;


const GradientHeading = styled.h2`
    background: linear-gradient(45deg, #d41e47, #ff7e5f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
  `;

const GradientHeading4 = styled.h4`
    // background: linear-gradient(45deg, #d41e47, #ff7e5f);
    // color: var(--logo-orange);
    background: var(--logo-orange);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    font-size: 1.1em;
  `;

const Desc = styled.p`
  color: var(--logo-yellow);
`;

const Ingredients = styled.p`
  color: var(--logo-orange);
`;

const Price = styled.p`
  color: var(--logo-red);
`;

const SearchContainer = styled.div`
    display: flex;
    margin: 20px;
    width: 275px;
  `;

const FoodItem = styled.div`
    margin-block: 20px;
    padding: 10px;
    border: 1px solid var(--logo-red);
    position: relative;
    padding: 20px;
  `;

const FoodResponse = styled.div`
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    margin: 20px;
    padding: 20px;
    border: 1px solid black
    transition: border-color 0.3s ease, background 0.3s ease;
    ${css`
        animation: ${gradientAnimation2} 3s ease-out infinite;
      `}
  `;

const SpinnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    padding: 20px;
    border: 1px solid black
    transition: border-color 0.3s ease, background 0.3s ease;
    ${css`
        animation: ${gradientAnimation2} 3s ease-out infinite;
    `}
  `
const SearchInput = styled.input`
  padding: 10px;
  font-size: 14px;
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  outline: none;
  transition: border-color 0.3s ease, background 0.3s ease;
  ${props => props.isAnimated && css`
    animation: ${gradientAnimation} 2s ease-out infinite;
  `}
`;

const SearchButton = styled.button`
// padding: 10px 20px;
border: 1px solid #ccc;
border-left: none;
background: linear-gradient(45deg,rgb(222, 57, 96),rgb(251, 114, 79));
color: white;
border-radius: 0 4px 4px 0;
cursor: pointer;

&:hover {
    background-color: green;
}
    
img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    object-position: center;
    transform: scale(1.8);
    margin-top: 5px;
    }
        
`;
export const SearchButton2 = styled.button`
padding: 10px 15px;
border: 1px solid #ccc;
border-left: none;
background: #ccc;
color: white;
border-radius: 0;
cursor: pointer;

&:hover {
    opacity: .85;
}
    
img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    object-position: center;
    transform: scale(1.8);
    }
        
`;

export {
    SearchInput, SearchButton, FoodItem, Price, Ingredients,
    SpinnerWrapper, FoodResponse, Desc, SearchContainer, GradientHeading,
    GradientHeading4, gradientAnimation, gradientAnimation2
}