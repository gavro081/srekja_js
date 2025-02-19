import React from 'react'
import Navbar from "../../shumaComponents/Navbar.jsx";
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepButton from '@mui/joy/StepButton';
import StepIndicator from '@mui/joy/StepIndicator';
import Check from '@mui/icons-material/Check';
import FoodReview from "./ReviewSubMenus/FoodReview.jsx";
import GradientText from "./GradientText.jsx";
import styled from "styled-components";

const steps = ['Храна', 'Услуга', 'Севкупно'];

const Reviews = () => {
    const [activeStep, setActiveStep] = React.useState(0);


    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(prevStep => prevStep + 1);
        }
    };
    return (
        <div>
            <Navbar></Navbar>
            <Stepper sx={{ width: '100%' }}>
                {steps.map((step, index) => (
                    <Step
                        key={{step}}
                        orientation="vertical"
                        indicator={
                            <StepIndicator
                                variant={activeStep <= index ? 'soft' : 'filled'}
                                sx={{
                                    // Apply custom colors based on the active step
                                    color: activeStep < index ? 'var(--logo-orange)' : 'var(--logo-orange)',
                                    borderColor: activeStep === index ? 'var(--logo-orange)' : 'var(--logo-orange)',
                                }}
                            >
                                {activeStep <= index ? index + 1 : <Check />}
                            </StepIndicator>
                        }
                        sx={[
                            activeStep > index &&
                            index !== 2 && { '&::after': { bgcolor: 'var(--logo-red)' } },
                        ]}
                    >

                        <StepButton onClick={() => setActiveStep(index)}>
                            {activeStep === index ? <GradientText colors={["var(--logo-orange)", "var(--logo-yellow)", "var(--logo-red), var(--logo-green)"]}
                                                                  animationSpeed={3}>{step}</GradientText> : step}
                        </StepButton>

                    </Step>
                ))}
            </Stepper>
            {activeStep === 0 && <FoodReview />}
            {activeStep === 1 && <div>Usluga...</div>}
            {activeStep === 2 && <div>Sevkupno...</div>}
            <NextButton onClick={handleNext} disabled={activeStep === steps.length - 1}>
                {activeStep === steps.length - 1 ? "Испрати!" : "Понатаму"}
            </NextButton>
        </div>
    )
}

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


export default Reviews
