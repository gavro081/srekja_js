import styled from "styled-components";
import RightContainer from "./RightContainer";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <LeftContainer>Среќа е...</LeftContainer>
        <RightContainer />
      </HeroContent>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45vh;
`;

const HeroContent = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.5);
  padding: 0 20px;
`;

const LeftContainer = styled.div`
  width: 45%;
  height: 100%;
  padding-left: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "Lobster", cursive;
  font-size: 80px;
  margin-right: 20px;
`;
