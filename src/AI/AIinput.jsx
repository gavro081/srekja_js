import React, { useState } from 'react'
import {
    SearchInput,
    SearchContainer,
    SearchButton,
    FoodResponse,
    AIResponse,
    SpinnerWrapper,
    GradientHeading,
    GradientHeading4,
    FoodItem,
    Desc,
    Ingredients,
    Price,
} from './inputStyles';

function AIinput() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [hasResponse, setHasResponse] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);

    const formatResponse = (text) => {
        return text.split("\n").map((line, index) => {
            // Replace **word** with <h2>word</h2>
            const formattedLine = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
            return <span key={index} dangerouslySetInnerHTML={{ __html: formattedLine + "<br />" }} />;
        });
    };

    const ResponseRenderer = ({ response }) => {
        return <div>{formatResponse(response)}</div>;
    };


    const fetchQuery = async () => {
        console.log(input);
        setisLoading(true);
        setHasResponse(false);
        setIsAnimated(true);
        try {
            const res = await fetch('http://localhost:3002/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: input,
                    type: 'user_help',
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
        <>
            <SearchContainer>
                <SearchInput
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Како да направам CV?"
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
            {hasResponse && <ResponseRenderer response={response} />}
            {!hasResponse && <AIResponse>
                <h3>asd</h3>
            </AIResponse>}
        </>
    )
}

export default AIinput
