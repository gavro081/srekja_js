import { useState } from 'react';
import styled from 'styled-components';
import CustomizedRating from '../CustomizedRating.jsx';

const ServiceReview = () => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  return (
    <FormWrapper>
      <h2>Оценете ја услугата</h2>

      <Label>Оценка:</Label>
      <CustomizedRating
        value={rating}
        onChange={(newValue) => setRating(newValue)}
      />

      <Label>Вашето мислење:</Label>
      <TextArea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Напишете ги вашите впечатоци тука..."
      />
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: var(white, #222);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: auto;
  color: black;
  margin-top: 2rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: var(--logo-orange);
  font-weight: bold;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid var(--logo-orange);
  background: var(white, #333);
  color: black;
  resize: none;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--logo-yellow);
  }
`;

export default ServiceReview;
