import React, { useState } from 'react';
import styled from "styled-components";
import Stepper from '@mui/joy/Stepper';
import Step from "@mui/joy/Step";
import StepIndicator from "@mui/joy/StepIndicator";
import Check from "@mui/icons-material/Check";
import StepButton from "@mui/joy/StepButton";
import GradientText from "../SrekjaBar/Reviews/GradientText.jsx";
import { motion } from "framer-motion";
import Navbar from "../shumaComponents/Navbar.jsx";
import CircularWithValueLabel from "./CircularProgressWithLabel.jsx";

const steps = ['Област', 'Основни информации', 'Тим и основачи', 'Идеја и мисија', 'Бизнис модел', 'Производ', 'Пазар и конкуреницја', 'План за развој', 'Поднеси'];
const questions = [
    'Во која индустрија или област припаѓа вашиот стартап?',
    'Какви се основните информации за вашиот стартап?',
    'Кој е вашиот тим и кои се основачите?',
    'Каква е вашата идеја и мисија?',
    'Каков е вашиот бизнис модел?',
    'Каков е вашиот производ?',
    'Каков е вашиот пазар и конкуренција?',
    'Каков е вашиот план за развој?',
    'Поднесете ја вашата апликација!',
];

const choices = [
    ['ИТ', 'Екологија', 'Образование', 'Здравство'],
];

export const StartupCreate = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedChoice, setSelectedChoice] = useState(null);

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            setIsSubmitted(true);
        } else {
            setActiveStep((prev) => prev + 1);
            setSelectedChoice(null); // Reset choice after moving to next step
        }
    };

    const handleChoiceClick = (choice) => {
        setSelectedChoice(choice);
    };

    return (
        <Wrapper>
            <Navbar />
            <Header>
                <GradientTextWrapper>
                    <GradientText
                        colors={["var(--logo-orange)", "var(--logo-yellow)", "var(--logo-red)", "var(--logo-green)"]}
                        animationSpeed={3}
                    >
                        {steps[activeStep]}
                    </GradientText>
                </GradientTextWrapper>
                <CircularWithValueLabel />
            </Header>

            <Question>{questions[activeStep]}</Question>

            <ChoicesWrapper>
                {choices[activeStep]?.map((choice, index) => (
                    <ChoiceButton
                        key={index}
                        onClick={() => handleChoiceClick(choice)}
                        selected={selectedChoice === choice}
                    >
                        {choice}
                    </ChoiceButton>
                ))}
            </ChoicesWrapper>

            <NextButton onClick={handleNext}>
                {isSubmitted ? (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        ✅ Поднесено!
                    </motion.div>
                ) : activeStep === steps.length - 1 ? (
                    "Испрати!"
                ) : (
                    "Понатаму"
                )}
            </NextButton>
        </Wrapper>
    );
};

const Wrapper = styled.div``;

const GradientTextWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const NextButton = styled.button`
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(45deg, var(--logo-orange), var(--logo-red));
    color: white;
    border: none;
    padding: 0.7rem 2rem;
    font-size: 1.2rem;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

    &:hover {
        background: linear-gradient(45deg, var(--logo-red), var(--logo-orange));
        transform: translateX(-50%) scale(1.05);
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 25rem;
    margin-right: 25rem;
    align-items: center;
    padding: 1rem;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    margin-top: 2rem;
`;

const Question = styled.h2`
    text-align: center;
    margin-top: 3rem;
    font-size: 1.8rem;
    color: black;
`;

const ChoicesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
`;

const ChoiceButton = styled.button`
    background: ${({ selected }) =>
            selected
                    ? 'linear-gradient(45deg, var(--logo-orange), var(--logo-red))'
                    : 'white'};
    color: ${({ selected }) => (selected ? 'white' : 'black')};
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    margin: 0.5rem;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
    width: 200px;
    height: 200px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

    &:hover {
        background: ${({ selected }) =>
                selected ? 'linear-gradient(45deg, var(--logo-red), var(--logo-orange))'
                        : 'lightgray'};
        transform: scale(1.05);
    }
`;

