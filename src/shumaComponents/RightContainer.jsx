import styled from "styled-components";
import { useEffect, useState } from "react";

const colors = {
  logoOrange: "#e96f23",
  logoGreen: "#0B776F",
  logoYellow: "#e9ba1d",
  logoRed: "#D41E47",
};

const srekaArray = [
  " да создаваш ",
  " да даваш ",
  " да простуваш ",
  " да веруваш ",
  " да помагаш ",
  " да споделуваш ",
  " да сонуваш ",
  " да успееш ",
  " да чувствуваш ",
  " да си свој ",
  " да си сакан ",
  " да прегрнуваш ",
  " да патуваш ",
  " да си дома ",
  " да се дружиш ",
  " да си слободен ",
  " да се инспирираш ",
  " да си благодарен ",
  " да имаш време ",
  " да имаш пријатели ",
  " да имаш семејство ",
  " да имаш надеж ",
  " да пиеш кафе ",
  " да гледаш ѕвезди ",
  " да слушаш музика ",
  " да шеташ во природа ",
  " да те разберат ",
  " да добиеш прегратка ",
  " да чуеш убав збор ",
  " да дишеш слободно ",
  " да гледаш изгрејсонце ",
  " да направиш добро ",
  " да создадеш спомени ",
  " да слушнеш смеа ",
  " да почувствуваш љубов ",
];


export default function RightContainer() {
  const [randomElement, setRandomElement] = useState("");
  const [randomColor, setRandomColor] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [isFirstRun, setIsFirstRun] = useState(true);

  useEffect(() => {
    const updateRandomValues = () => {
      const newRandomElement =
        srekaArray[Math.floor(Math.random() * srekaArray.length)];
      const newRandomColor =
        Object.values(colors)[
          Math.floor(Math.random() * Object.values(colors).length)
        ];

      setRandomColor(newRandomColor);
      setDisplayedText(""); // Reset text for new animation

      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < newRandomElement.length) {
          setDisplayedText((prev) => prev + newRandomElement.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval); // Stop when finished
        }
      }, 15); // Typing speed
      // setRandomElement(newRandomElement);
    };

    if (isFirstRun) {
      setIsFirstRun(false);
    } else {
      updateRandomValues();
      const intervalId = setInterval(updateRandomValues, 400); // Change text every 5s

      return () => clearInterval(intervalId);
    }
  }, [isFirstRun]);

  return (
    <RightContent style={{ color: randomColor }}>{displayedText}</RightContent>
  );
}

const RightContent = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -6px;
  font-size: 70px;
  font-family: "Oswald", sans-serif;
  white-space: nowrap;
  overflow: hidden;
`;
