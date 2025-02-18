import { useState, useEffect } from "react";
import styled from 'styled-components';

const GPTtester = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [hasResponse, setHasResponse] = useState(false);

  const fetchQuery = async () => {
    console.log(input)
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
        // body: JSON.stringify({ messages }),
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      console.log(data);
      setResponse(data); 
      setHasResponse(true);
    } catch (error) {
      console.error("Error fetching OpenAI response:", error);
    }
  }
  return (
    <div>
      <SearchContainer>
        <SearchInput 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search..." 
        />
        <SearchButton onClick={fetchQuery}>/</SearchButton>
      </SearchContainer>
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



const SearchContainer = styled.div`
    display: flex;
    margin: 20px;
    // width: 130px;
  `;

  const SearchInput = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    outline: none;
  `;

  const SearchButton = styled.button`
    padding: 10px;
    border: 1px solid #ccc;
    border-left: none;
    background-color: #007BFF;
    color: white;
    border-radius: 0 4px 4px 0;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
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