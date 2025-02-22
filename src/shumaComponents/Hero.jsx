import styled from "styled-components";
import RightContainer from "./RightContainer";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <AnimationContainer>
          <LeftContainer>Среќа е...</LeftContainer>
          <RightContainer />
        </AnimationContainer>

        <CallToAction>
          <Paragraph>
            {" "}
            Среќа.мк, платформата која ги спојува инвеститорите со стартапите,
            фирмите со фриленсерите и читателите со среќата
          </Paragraph>
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NextButton>Стартап Настани</NextButton>
            <NextButton>Вработи Сé</NextButton>
          </div>
        </CallToAction>
      </HeroContent>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  background-image: url("../../assets/images/heroBackGround.jpg");
  background-size: cover;
  background-position: center;
`;

const HeroContent = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: center;
  box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.5);
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.5);
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

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  background: linear-gradient(to right, #0b776f, #e96f23, #e9ba1d, #d41e47);
`;

const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CallToAction = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Lobster", cursive;
  font-size: 80px;
  margin-top: 40px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

const NextButton = styled.button`
  background: linear-gradient(45deg, var(--logo-orange), var(--logo-red));
  color: white;
  border: none;
  padding: 0.7rem 2rem;
  font-size: 1.4rem;
  letter-spacing: 1px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(45deg, var(--logo-red), var(--logo-orange));
    transform: scale(1.05);
  }
`;
