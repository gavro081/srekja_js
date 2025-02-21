import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: #1976d2; /* MUI Primary Blue */
    box-shadow: 0 0 4px rgba(25, 118, 210, 0.3);
  }

  &:hover {
    border-color: rgba(25, 118, 210, 0.8);
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #666;
`;

const CustomTextField = ({ label, ...props }) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <StyledInput {...props} />
    </InputWrapper>
  );
};

export default CustomTextField;
