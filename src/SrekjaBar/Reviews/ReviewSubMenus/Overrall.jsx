import React, { useState } from 'react';
import styled from 'styled-components';
import CustomizedRating from '../CustomizedRating.jsx';

const Overall = () => {
    const [rating, setRating] = useState(0);



    return (
        <Wrapper>
            <h2>Општа оцена</h2>
            <CustomizedRating value={rating} onChange={(newValue) => setRating(newValue)} />

        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem;
    gap: 2rem;
    background: var(white, #222);
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    margin: auto;
    margin-top: 2rem;
    color: var(--logo-red);
`;



export default Overall;
