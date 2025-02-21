import React from 'react';
import styled from 'styled-components';

const Toast = ({ message, show, onClose, hasWon }) => {
  if (!show) return null;

  function generateRandomCode() {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  return (
    <ToastContainer>
      <TextWrapper>
        <ToastMessage>{message}</ToastMessage>
        {hasWon && (
          <>
            <ToastMessage>Вашиот промо код е:</ToastMessage>
            <ToastMessage>{generateRandomCode()}</ToastMessage>
          </>
        )}
      </TextWrapper>
      <CloseButton onClick={onClose}>X</CloseButton>
    </ToastContainer>
  );
};

const ToastContainer = styled.div`
  position: fixed;
  // TUKA menjaj po potreba
  bottom: 50%;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(83, 28, 41);
  color: white;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const ToastMessage = styled.div`
  margin-right: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  justify-content: space-between;
`;
const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  right: 10px;
  top: 5px;
  position: fixed;
  font-size: 16px;
  cursor: pointer;
`;

export default Toast;
