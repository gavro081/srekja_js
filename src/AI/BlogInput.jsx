import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Spinner from '../UserManagement/Spinner';
import blogs from './blogs';
import {
  SearchInput,
  SearchContainer,
  SearchButton,
  SearchButton2,
  FoodResponse,
  SpinnerWrapper,
  GradientHeading,
  GradientHeading4,
  FoodItem,
  Desc,
  Ingredients,
  Price,
} from './inputStyles';

function BlogInput() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [hasResponse, setHasResponse] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const testData = blogs;

  const fetchQuery = async () => {
    setisLoading(true);
    setHasResponse(false);
    setIsAnimated(true);

    try {
      const res = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          type: 'blog',
        }),
      });
      const data = await res.json();
      console.log(data);
      setResponse(data);
      setHasResponse(true);
      setisLoading(false);
      setIsAnimated(false);
    } catch (error) {
      console.error('Error fetching OpenAI response:', error);
      setisLoading(false);
      setIsAnimated(false);
    }
  };

  return (
    <div>
      <SearchContainer>
        <SearchInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Дај да читнам нешто смешно..."
          isloading={isLoading}
          isAnimated={isAnimated}
        />
        <SearchButton2 onClick={() => alert('TODO')}>
          <img
            src="../../assets/images/search.png"
            alt="Search"
            style={{ width: '15px', height: '15px' }}
          />
        </SearchButton2>
        <SearchButton onClick={fetchQuery}>
          <img
            src="../../assets/images/logo-2020-white-1.png"
            alt="Search"
            width={50}
          />
        </SearchButton>
      </SearchContainer>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : null}
      {hasResponse ? null : testData.length === 0 ? (
        <h2 style={{ fontFamily: 'Arial, sans-serif' }}>
          Немам производи за вас. Обидете се повторно.
        </h2>
      ) : (
        <FoodResponse>
          <GradientHeading>
            Site blogovi dur da sredam ko so treba:
          </GradientHeading>
          {testData.map((item, index) => (
            <p>{item.title}</p>
          ))}
        </FoodResponse>
      )}
    </div>
  );
}

export default BlogInput;
