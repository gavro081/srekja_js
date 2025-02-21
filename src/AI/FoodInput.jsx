import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Spinner from '../UserManagement/Spinner';
import menu_items from './menuitems';
import {
  SearchInput,
  SearchContainer,
  SearchButton,
  FoodResponse,
  SpinnerWrapper,
  GradientHeading,
  GradientHeading4,
  FoodItem,
  Desc,
  Ingredients,
  Price,
} from './inputStyles';

const FoodInput = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [hasResponse, setHasResponse] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  // const testData = menu_items.filter(item => item.tags.includes("vegetarian"))
  // console.log(testData);

  const fetchQuery = async () => {
    console.log(input);
    setisLoading(true);
    setHasResponse(false);
    setIsAnimated(true);
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
        body: JSON.stringify({
          message: input,
          type: 'food',
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
          placeholder="Дај ми нешто вегетеријанско..."
          isloading={isLoading}
          isAnimated={isAnimated}
        />
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
      {!hasResponse ? null : response.length === 0 ? (
        <h2 style={{ fontFamily: 'Arial, sans-serif' }}>
          Немам производи за вас. Обидете се повторно.
        </h2>
      ) : (
        <FoodResponse>
          <GradientHeading>
            Ви препорачувам некој од следниве производи:
          </GradientHeading>
          {response.map((item, index) => (
            <FoodItem key={index}>
              <GradientHeading4>{item.macedonian_name}</GradientHeading4>
              <Desc>{item.details}</Desc>
              <Ingredients>
                Состојки: {item['ingredients-mk'].join(', ')}
              </Ingredients>
              <Price>Цена: {item.price} ден</Price>
            </FoodItem>
          ))}
        </FoodResponse>
      )}
    </div>
  );
};

export default FoodInput;
