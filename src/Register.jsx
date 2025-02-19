import React, { use, useState } from 'react'
import Stepper, { Step } from './Stepper/Stepper'
import styled from 'styled-components';
import CustomTextField from './CustomTextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { doc, setDoc } from '@firebase/firestore';
import { db } from './firebase/firebase';
import { auth } from './firebase/firebase';
import Spinner from './Spinner';


function Register() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [interests, setInterests] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const handleInterestChange = (e) => {
        if (e.target.checked) {
            setInterests([...interests, e.target.value]);
        } else {
            setInterests(interests.filter(interest => interest !== e.target.value));
        }
    }

    const validEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const validateStep = (step) => {
        if (step === 1) {
            if (name !== ""
                && lastName !== ""
                && email !== ""
                && password !== "") {
                if (!validEmail(email)) {
                    alert("Внесете валидна е-пошта");
                    return false;
                }
                if (password.length < 6){
                    alert("Лозинката мора да има барем 6 карактери")
                    return false;
                }
                return true;
            }
            alert("Внесете ги сите потребни информации");
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        setError(null);
        setIsLoading(true)
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            const userID = user.uid

            await setDoc(doc(db, "users", userID), {
                name: name,
                surname: lastName,
                email: email,
                interests: interests
            })
            setIsLoading(false)
            console.log("Signup successful!");
        }catch (err){
            setIsLoading(false)
            setError(err.message)
            console.error("Signup failed:", err)
        }
    }

    return (
        <>
            {isLoading ? (
                <SpinnerWrapper>
                    <Spinner />
                </SpinnerWrapper>
            ) : error ? (
                <p>{error.message}</p>
            ) : (
                <StepperWrapper>
                    <Stepper
                        initialStep={1}
                        onFinalStepCompleted={handleSubmit}
                        backButtonText="Назад"
                        nextButtonText="Продолжи"
                        validateStep={validateStep} // Pass the validation function
                    >
                        <Step>
                            <InputWrapper>
                                <CustomTextField
                                    value={name} // Ensure the input field is controlled
                                    onChange={(e) => setName(e.target.value)}
                                    label="Име*"
                                    type="text"
                                    placeholder="Петар"
                                />
                                <CustomTextField
                                    value={lastName} // Ensure the input field is controlled
                                    onChange={(e) => setLastName(e.target.value)}
                                    label="Презиме*"
                                    type="text"
                                    placeholder="Петровски"
                                />
                                <CustomTextField
                                    value={email} // Ensure the input field is controlled
                                    onChange={(e) => setEmail(e.target.value)}
                                    label="е-пошта*"
                                    type="email"
                                    placeholder="demo@srekja.mk"
                                />
                                <CustomTextField
                                    value={password} // Ensure the input field is controlled
                                    onChange={(e) => setPassword(e.target.value)}
                                    label="Лозинка*"
                                    type="password"
                                    placeholder="do2as-asd34-asdnj"
                                />
                            </InputWrapper>
                        </Step>
                        <Step>
                            <h2>Одбери ги твоите интереси</h2>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox onChange={handleInterestChange} value="спорт" />}
                                    label="Спорт"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleInterestChange} value="љубов" />}
                                    label="Љубов"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleInterestChange} value="технологија" />}
                                    label="Технологија"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleInterestChange} value="хумор" />}
                                    label="Хумор"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleInterestChange} value="економија" />}
                                    label="Економија"
                                />
                            </FormGroup>
                        </Step>
                        <Step>
                            <ImageWrapper>
                                <img
                                    src="../public/slikiZaEshop/logoDark-1.jpg"
                                    width={100}
                                    alt="Logo"
                                />
                            </ImageWrapper>
                            <StyledHeader>
                                Добредојдовте, {name}
                            </StyledHeader>
                            <Paragraph>
                                Твојот профил можеш да го користиш за да добиваш различни награди, да резервираш
                                маса во Среќа Бар, да ги следиш најновите понуди и многу други активности.
                            </Paragraph>
                        </Step>
                    </Stepper>
                </StepperWrapper>
            )}
        </>
    );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StepperWrapper = styled.div`
    margin: 20px auto;
    padding: 20px;
`;

const StyledHeader = styled.h2`
    color: var(--logo-red);
    font-size: 1.5em;
    margin-bottom: 10px;
`;

const Paragraph = styled.p`
    color: var(--logo-orange);
    font-size: 1.2em;
    margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

`
const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 75px;
`

export default Register
