import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import GradientText from "../GradientText.jsx";
import CircularGallery from "../CircularGallery.jsx";
import menu_items from '../../../AI/menuitems.js';
import CustomizedRating from "../CustomizedRating.jsx";



const FoodReview = () => {


    const customItems = menu_items.slice(0, 4).map(item => {
        return {
            image: item.image,
            text: item.macedonian_name,
            price: item.price
        };
    });


    return (
        <Wrapper>
            {customItems.map((item, index) => (
                <Card key={index}>
                    <img src={item.image} alt={item.text} width='200rem'/>
                    <div >
                        <h2>{item.text}</h2>
                        <p style={{marginTop: '1rem', color:'var(--logo-green)',fontWeight:'bold'} }>{item.price} ден.</p>
                    </div>
                    <RatingWrapper>
                        <CustomizedRating />
                    </RatingWrapper>
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
const Card = styled.div`
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 20rem;
    height: 23rem;
    position: relative;
    background: white; /* Background color of the card */

    &::before {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        z-index: -1;
        border-radius: 1rem;
        background: linear-gradient(to right, var(--logo-orange), var(--logo-yellow), var(--logo-red), var(--logo-green));
        animation: gradient-border 3s infinite;
    }

    @keyframes gradient-border {
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: 100% 50%;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
    }

    img {
        border: 1px solid white;
        width: 10rem;
        box-shadow: 3px 10px 10px rgba(0, 0, 0, 0.2);
    }

    h2, p {
        margin: 0.5rem 0;
    }
`;

const RatingWrapper = styled.div`
    margin-top: auto;
    width: 100%;
`;
export default FoodReview
