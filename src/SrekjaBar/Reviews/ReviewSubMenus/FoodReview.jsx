import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import GradientText from "../GradientText.jsx";
import CircularGallery from "../CircularGallery.jsx";
import menu_items from '../../../../public/menuitems.jsx';


const FoodReview = () => {


const customItems = menu_items.slice(0, 4).map(item => {
    return {
        image: item.image,
        text: item.name
    };
});


    return (
        <Wrapper>
            {customItems.map((item, index) => (
                <Card key={index}>
                    <img src={item.image} alt={item.text}  width='200rem'/>
                    <h2>{item.text}</h2>
                </Card>
            ))}

        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
   
`
const  Card= styled.div`
    border-radius: 1rem;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
    display: flex;
  
    align-items: flex-start;
    width: 20rem;
    height: 23rem;
    

    img {
        align-self: flex-start;
        border: 1px solid black;
        margin-right: 1rem;
        width: 10rem;
    }
    h2 {
       word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
    }
   
    
`
export default FoodReview
