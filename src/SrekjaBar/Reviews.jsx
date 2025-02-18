import React from 'react'
import Navbar from "../shumaComponents/Navbar.jsx";
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepButton from '@mui/joy/StepButton';
import StepIndicator from '@mui/joy/StepIndicator';
import Check from '@mui/icons-material/Check';

const steps = ['Храна', 'Услуга', 'Севкупно'];

const Reviews = () => {
    const [activeStep, setActiveStep] = React.useState(1);
    return (
        <div>
            <Navbar></Navbar>
            <Stepper sx={{ width: '100%' }}>
                {steps.map((step, index) => (
                    <Step
                        key={step}
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
                        <StepButton onClick={() => setActiveStep(index)}>{step}</StepButton>
                    </Step>
                ))}
            </Stepper>



        </div>
    )
}
export default Reviews
