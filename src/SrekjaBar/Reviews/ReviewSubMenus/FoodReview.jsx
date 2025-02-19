import React from 'react'
import styled from "styled-components";
import GradientText from "../GradientText.jsx";
import CircularGallery from "../CircularGallery.jsx";
import menu_items from '../../../../public/menuitems.jsx';

const FoodReview = () => {
    const customItems = menu_items.map(item => ({
        image: 'https://example.com/image1.jpg',
        text: item.name
    }));
    return (
        <Wrapper>
            <div style={{ height: '500px', position: 'relative' }}>
                <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} items={customItems}/>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
   
`
export default FoodReview
