import styled from 'styled-components';

const colors = {
    logoOrange: "#e96f23",
    logoGreen: "#0B776F",
    logoYellow: "#e9ba1d",
    logoRed: "#D41E47"
};

const srekaArray = [
    "да создаваш",
    "да даваш",
    "да простуваш",
    "да веруваш",
    "да помагаш",
    "да споделуваш",
    "да сонуваш",
    "да успееш",
    "да чувствуваш",
    "да си свој",
    "да си сакан",
    "да прегрнуваш",
    "да патуваш",
    "да си дома",
    "да се дружиш",
    "да си слободен",
    "да се инспирираш",
    "да си благодарен",
    "да имаш време",
    "да имаш пријатели",
    "да имаш семејство",
    "да имаш надеж",
    "да пиеш кафе",
    "да гледаш ѕвезди",
    "да слушаш музика",
    "да шеташ во природа",
    "да те разберат",
    "да добиеш прегратка",
    "да чуеш убав збор",
    "да дишеш слободно",
    "да гледаш изгрејсонце",
    "да направиш добро",
    "да создадеш спомени",
    "да слушнеш смеа",
    "да почувствуваш љубов",
];


export default function Hero() {
    return (
        <HeroContainer>
            <HeroContent>
                <LeftContainer>Среќа е</LeftContainer>
                <RightContainer style={{ color: colors[Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)]] }}>
                    {srekaArray[Math.floor(Math.random() * srekaArray.length)]}
                </RightContainer>
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
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
    box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.5);
    padding: 0 20px;
`;

const LeftContainer = styled.div`
  width: 25%;
  height: 100%;
    padding-left:50px ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Lobster", cursive;
    font-size: 80px;
    
`;

const RightContainer = styled.div`
  width: 75%;
  height: 100%;
    margin-top: -7px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: "Oswald", cursive;
    font-size: 70px;
`;