import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the spin animation using keyframes
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled wrapper with spinning animation
const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  animation: ${spin} 4s linear infinite;
`;

// Styled SVG element that will occupy the full size of the wrapper
const Svg = styled.svg`
  width: 100%;
  height: 100%;
  stroke: var(--logo-red);
  fill: var(--logo-red);
`;

// Styled text element inside the SVG
const Text = styled.text`
  font-size: 12.5px;
`;

const Spinner = ({ text = "Среќа • Среќа • Среќа • Среќа • Среќа •" }) => {
  return (
    <Wrapper>
      <Svg viewBox="0 0 100 100">
        <defs>
          <path
            id="circle"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <Text>
          <textPath xlinkHref="#circle">
            {text}
          </textPath>
        </Text>
      </Svg>
    </Wrapper>
  );
};

export default Spinner;