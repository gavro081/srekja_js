import { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import Spinner from "../Spinner";

const GPTtester = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [hasResponse, setHasResponse] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const fetchQuery = async () => {
    console.log(input)
    setisLoading(true);
    setHasResponse(false);
    SearchInput = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    outline: none;
    transition: border-color 0.3s ease, background 0.3s ease;
    animation: ${gradientAnimation} 2s ease-out infinite;
  `;
    // const messages = [
    //   { role: "system", content: "Whatever the user says respond with Quack." },
    //   { role: "user", content: input },
    // ];

    try {
      const res = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      console.log(data);
      setResponse(data); 
      setHasResponse(true);
      setisLoading(false);
      resetCSS();
    } catch (error) {
      console.error("Error fetching OpenAI response:", error);
      setisLoading(false);
      resetCSS();
    }
  }
  return (
    <div>
      <SearchContainer>
        <SearchInput 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Дај ми нешто вегетеријанско..." 
          isloading={isLoading}
        />
        <SearchButton onClick={fetchQuery}>
          <img src="../../public/slikiZaEshop/logo.png" alt="Search" width={50} />
        </SearchButton>
      </SearchContainer>
      {isLoading ? <Spinner /> : null}
      {!hasResponse ? null : (
        response.length === 0 ? (
          <h2 style={{ fontFamily: "Arial, sans-serif" }}>Немам производи за вас. Обидете се повторно.</h2>
        ) : (
          <>
            <h2>Ви препорачувам некој од следниве производи:</h2>
            {response.map((item, index) => (
              <div key={index}>
                <h5 style={{ fontFamily: "Arial, sans-serif" }}>{item.name} ({item.macedonian_name})</h5>
                <p>{item.details}</p>
                <p>Price: {item.price} MKD</p>
                <p>Ingredients: {item.ingredients.join(", ")}</p>
              </div>
            ))}
          </>
        )
      )}
    </div>
  );
};

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

const SearchContainer = styled.div`
    display: flex;
    margin: 20px;
    width: 275px;
  `;

  const resetCSS = () => {
  SearchInput = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    outline: none;
    transition: border-color 0.3s ease, background 0.3s ease;
  `;
  }
  let SearchInput = ''
  resetCSS();

  const SearchButton = styled.button`
    // padding: 10px 20px;
    border: 1px solid #ccc;
    border-left: none;
    background-color: var(--logo-red);
    color: white;
    border-radius: 0 4px 4px 0;
    cursor: pointer;

    &:hover {
      background-color: var(--hover-red);
    }
  `;

export default GPTtester;



// za sekoj slucaj neka stoi tuka
// useEffect(() => {
//   const fetchChatCompletion = async () => {
//     const messages = [
//       { role: "system", content: "Whatever the user says respond with Quack." },
//       { role: "user", content: "Hello, how are you? Can you help me with something?" },
//     ];

//     try {
//       const res = await fetch('/api/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ messages }),
//       });
//       const data = await res.json();
//       setResponse(data.choices[0].message.content);
//     } catch (error) {
//       console.error("Error fetching OpenAI response:", error);
//     }
//   };

//   fetchChatCompletion();
// }, []);