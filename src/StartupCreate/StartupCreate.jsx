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
import Confetti from 'react-confetti';

const steps = ['Област', 'Основни информации', 'Тим и основачи', 'Визија и идеја','Насловна фотографија'];
const questions = [
    'Во која индустрија или област припаѓа вашиот стартап?',
    'Накратко претставете го вашиот стартап',
    'Кој е вашиот тим и кои се нивните улоги?',
    'Која е вашата визија и идеја?',
    'Објавете ја вашата насловна фотографија',
];

const choices = [
    ['ИТ', 'Екологија', 'Образование', 'Здравство', 'Друго'],
];

export const StartupCreate = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [startupInfo, setStartupInfo] = useState('');
    const [startupInfo2, setStartupInfo2] = useState('');
    const [teamMembers, setTeamMembers] = useState(['']);
    const [inputData,SetInputData] = useState({
        name: '',
        uloga: ''
    })
    const [inputarr, setInputArr] = useState([]);

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

    const handleTeamMemberChange = (e) => {
        SetInputData({...inputData,[e.target.name]:e.target.value})

    };
    let{name, uloga} = inputData;
    const addTeamMember = () => {
        setInputArr([...inputarr, {name, uloga}]);
        SetInputData({name: '', uloga: ''});
    };

    const removeTeamMember = (index) => {
        setInputArr(inputarr.filter((_, i) => i !== index));
    };

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };


    return (
        <Wrapper>
            <Navbar />
            <Header>
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
                                {activeStep === index ? (
                                    <GradientText colors={["var(--logo-orange)", "var(--logo-yellow)", "var(--logo-red), var(--logo-green)"]}
                                                  animationSpeed={3}>
                                        {step}
                                    </GradientText>
                                ) : step}
                            </StepButton>

                        </Step>
                    ))}
                </Stepper>

            </Header>

            <Question>{questions[activeStep]}</Question>

            {activeStep === 1 ? (
                <TextInput
                    type="text"
                    value={startupInfo}
                    onChange={(e) => setStartupInfo(e.target.value)}
                    placeholder="Внесете основни информации за вашиот стартап"
                />
            ) : activeStep === 2 ? (
                <TeamMembersSection>
                    <TeamMembersForm>
                        <TextInputMemebrs
                            type="text"
                            name="name"
                            value={inputData.name}
                            onChange={handleTeamMemberChange}
                            placeholder={`Име на член`}
                        />
                        <TextInputMemebrs
                            type="text"
                            name="uloga"
                            value={inputData.uloga}
                            onChange={handleTeamMemberChange}
                            placeholder={`Улога`}
                        />

                        <AddMemberButton onClick={addTeamMember}>Додади член</AddMemberButton>
                    </TeamMembersForm>
                    <TableElement border={1} cellPadding={10}>
                        <tr>
                            <td>Име </td>
                            <td>Улога </td>
                        </tr>
                        {inputarr.map((member, index) => (
                            <tr key={index}>
                                <td>{member.name}</td>
                                <td>{member.uloga} <RemoveButton onClick={() => removeTeamMember(index)}>X</RemoveButton></td>

                            </tr>
                        ))}
                    </TableElement>
                </TeamMembersSection>
            ) : activeStep === 3 ? (
                <TextInput
                    type="text"
                    value={startupInfo2}
                    onChange={(e) => setStartupInfo2(e.target.value)}
                    placeholder="Нашата визија е ..."
                />

            ) : activeStep === 4 ? (
                <ImageUploadWrapper>
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                    {selectedImage && <PreviewImage src={selectedImage} alt="Преглед на сликата" />}
                </ImageUploadWrapper>
            ) : (
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
            )}

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
                    "Продолжи"
                )}
            </NextButton>
            {isSubmitted && <Confetti  numberOfPieces={300} recycle={false}/>}

        </Wrapper>
    );
};


const ImageUploadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`;

const PreviewImage = styled.img`
    width: 200px;
    height: 200px;
    margin-top: 1rem;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const RemoveButton = styled.button`
    background: var(--logo-red);
    color: white;
    border: none;
    width: 2rem; /* Set width */
    height: 2rem; /* Set height */
    font-size: 1rem;
    border-radius: 50%; /* Make the button round */
    cursor: pointer;
    transition: 0.3s ease-in-out;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    margin-left: 2rem; /* Add margin to create a gap */

    &:hover {
        background: var(--hover-red);
        transform: scale(1.05);
    }
`;
const TableElement = styled.table`
    width: 50%;
    margin-top: 2rem;
    border-collapse: collapse;
    align-self: flex-start; /* Align the table to the start of the flex container */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    th, td {
        border: 1px solid #ccc;
        padding: 0.75rem;
        text-align: center; /* Center the text in table cells */
        font-size: 1rem;
    }

    th {
        background-color: #f0f0f0;
        color: #333;
        font-weight: bold;
    }

    tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    tr:hover {
        background-color: #e0e0e0;
        transition: background-color 0.3s ease;
    }
`;
const TeamMembersSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;
`;
const TextInputMemebrs = styled.input`
    width: 80%;
    padding: 0.75rem;
    margin-top: 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: var(--logo-orange);
        box-shadow: 0px 4px 10px rgba(233, 111, 35, 0.5);
        outline: none;
    }
`;
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

const TextInput = styled.textarea`
    width: 50%;
    height: 10rem;
    padding: 0.5rem;
    margin: 1rem auto;
    display: block;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    resize: none; /* Prevent resizing */
    overflow-wrap: break-word; /* Ensure text wraps */
    margin-top: 1rem;
    &:focus {
        border-color: var(--logo-orange);
        box-shadow: 0px 4px 10px rgba(233, 111, 35, 0.5);
        outline: none;
    }
`;

const TeamMembersForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    width: 50%;
`;

const AddMemberButton = styled.button`
    background: linear-gradient(45deg, var(--logo-orange), var(--logo-red));
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    margin-top: 1rem;

    &:hover {
        background: linear-gradient(45deg, var(--logo-red), var(--logo-orange));
        transform: scale(1.05);
    }
`;

const HorizontalLine = styled.div`
    width: 100px;
    height: 2px;
    background-color: black;
    margin: 0 20px;
`;