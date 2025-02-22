import React, { useState } from 'react';
import styled from 'styled-components';
import { MessageCircle, X, Send } from 'lucide-react';

// Styled Components
const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 50;
`;

const CircleButton = styled.button`
  width: 4rem;
  height: 4rem;
  background: linear-gradient(45deg,rgb(222, 57, 96),rgb(251, 114, 79));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--hover-red);
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

const ChatWindow = styled.div`
  width: 20rem;
  height: 24rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: var(--logo-red);
  padding: 1rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h3`
  color: white;
  font-weight: 500;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #e5e7eb;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const ChatArea = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
`;

const Message = styled.div`
  background-color: #f3f4f6;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  max-width: 90%;
`;

const InputArea = styled.form`
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  &:disabled {
    background-color: #f3f4f6;
  }
`;

const SendButton = styled.button`
  background-color: var(--logo-red);
  color: white;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: var(--hover-red);
  }

  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const formatResponse = (text) => {
    return text.split("\n").map((line, index) => {
        // Replace **word** with <h2>word</h2>
        const formattedLine = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        return <span key={index} dangerouslySetInnerHTML={{ __html: formattedLine + "<br />" }} />;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    try{
      const res = await fetch('http://localhost:3002/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          type: 'user_help',
        }),
    })
    const data = await res.json();
    console.log(data);
    // await new Promise(resolve => setTimeout(resolve, 1000));
    setResponse(formatResponse(data));
    setIsLoading(false);
    setMessage('');
  }
  catch{
    console.error('Error fetching OpenAI response:', error);
    setIsLoading(false)
    // setIsAnimated(false);
  };}

  return (
    <Container>
      {!isOpen ? (
        <CircleButton onClick={() => setIsOpen(true)}>
          <img 
            src="/assets/images/logo-2020-white-1.png" 
            alt="Chat icon"
            // width={150}
          />
        </CircleButton>
      ) : (
        <ChatWindow>
          <Header>
            <HeaderTitle>Побарај помош</HeaderTitle>
            <CloseButton
              onClick={() => {
                setIsOpen(false);
                setResponse('');
                setMessage('');
              }}
            >
              <X />
            </CloseButton>
          </Header>

          <ChatArea>
            {response && (
              <Message>{response}</Message>
            )}
          </ChatArea>

          <InputArea onSubmit={handleSubmit}>
            <InputContainer>
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
              />
              <SendButton type="submit" disabled={isLoading}>
                <Send />
              </SendButton>
            </InputContainer>
          </InputArea>
        </ChatWindow>
      )}
    </Container>
  );
};

export default ChatBot;