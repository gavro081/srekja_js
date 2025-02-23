import styled from 'styled-components'
import wordle from '../../../public/wordle.json'
import {useState, useEffect, useRef} from "react";
import Navbar from '../../shumaComponents/Navbar';
import Footer from '../../shumaComponents/Footer';

export default function Wordle() {
    const currentWord = useRef('');
    const [score, setScore] = useState(0);
    // const [currentRow, setCurrentRow] = useState(0);
    const currentRow = useRef(0);

    const handleCurrWord = (value, rowIndex, colIndex) => {
        if (rowIndex !== currentRow.current) return;

        const newWord = currentWord.current.split('');
        newWord[colIndex] = value.toUpperCase();
        currentWord.current = newWord.join('');

        // Focus on the next input
        if (colIndex < 4) {
            const nextInput = document.getElementById(`${rowIndex}${colIndex + 2}`);
            if (nextInput) {
                nextInput.focus();
                nextInput.value = '';
            }
        }
    }

    const handleWordCheck = () => {
        const rowIndex = currentRow.current;
        let scoreCount = 0;
        const chars = currentWord.current.toUpperCase().split('');

        for (let target of wordle) {
            const targetWord = target.split('');
            scoreCount = 0;
            let isExactMatch = true;

            chars.forEach((ch, index) => {
                const card = document.getElementById(`${rowIndex}${index + 1}`);
                console.log(card)
                if (targetWord[index] === ch) {
                    card.classList.add('correct');
                    card.classList.remove('incorrect', 'partial');
                    scoreCount += 2;
                } else if (targetWord.includes(ch)) {
                    isExactMatch = false;
                    card.classList.add('partial');
                    card.classList.remove('correct', 'incorrect');
                    scoreCount += 1;
                } else {
                    isExactMatch = false;
                    card.classList.add('incorrect');
                    card.classList.remove('correct', 'partial');
                }
            });

            if (isExactMatch) {
                break;
            }
        }

        setScore(prevScore => prevScore + scoreCount);
        currentRow.current += 1;
        currentWord.current = '';
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleWordCheck();
        }
    }

    useEffect(() => {
        window.addEventListener('keyup', handleKeyDown);
        return () => {
            window.removeEventListener('keyup', handleKeyDown);
        }
    }, []);

    const handleFocus = (rowIndex, colIndex) => {
        if (rowIndex !== currentRow.current) return;

        const card = document.getElementById(`${rowIndex}${colIndex + 1}`);
        card.value = '';
        const newWord = currentWord.current.split('');
        newWord[colIndex] = '';
        currentWord.current = newWord.join('');
    }

    return (
        <>
        <Navbar></Navbar>
        <Wrapper>
            <h1>Среќни зборови</h1>
            <CardsWrapper>
                {[...Array(5)].map((_, rowIndex) => (
                    <CardsRow key={rowIndex} isActive={rowIndex === currentRow.current}>
                        {[...Array(5)].map((_, colIndex) => (
                            <Card
                                key={colIndex}
                                id={`${rowIndex}${colIndex + 1}`}
                                maxLength="1"
                                onChange={(e) => handleCurrWord(e.target.value, rowIndex, colIndex)}
                                onFocus={() => handleFocus(rowIndex, colIndex)}
                                disabled={rowIndex !== currentRow.current}
                            />
                        ))}
                    </CardsRow>
                ))}
            </CardsWrapper>
            <h1>Score: {score}</h1>
            <p>Притисни ентер за да продолжиш во следниот ред</p>
        </Wrapper>
        <Footer></Footer>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-block: 30px;
    align-items: center;
    gap: 30px;
    justify-content: center;
`

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

const CardsRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    opacity: ${props => props.isActive ? '1' : '.2'};
`

const Card = styled.input`
    background: #aaa;
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
    width: 5rem;
    height: 5rem;
    border-radius: 0;
    border: none;

    &.incorrect {
        background: var(--logo-red-opacity50);
    }
    &.correct {
        background: var(--logo-green);
        color: white;
    }
    &.partial {
        background: orange;
        color: white;
    }
`