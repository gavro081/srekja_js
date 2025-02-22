import React, { use, useState, useEffect } from 'react';
import Stepper, { Step } from './Stepper/Stepper';
import styled from 'styled-components';
import CustomTextField from './CustomTextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { doc, setDoc } from '@firebase/firestore';
import { db } from '../firebase/firebase';
import { auth } from '../firebase/firebase';
import Spinner from './Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/authContext';
import Navbar from '../shumaComponents/Navbar';
import Footer from '../shumaComponents/Footer';

function Register() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [interests, setInterests] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // proveri dali korisnik e logiran
  const { currentUser } = useAuth();

  if (currentUser) console.log('logiran');
  else console.log('nelogiran');

  const handleInterestChange = (e) => {
    if (e.target.checked) {
      setInterests([...interests, e.target.value]);
    } else {
      setInterests(interests.filter((interest) => interest !== e.target.value));
    }
  };

  const validEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateStep = (step) => {
    if (step === 1) {
      if (name !== '' && lastName !== '' && email !== '' && password !== '') {
        if (!validEmail(email)) {
          alert('Внесете валидна е-пошта');
          return false;
        }
        if (password.length < 6) {
          alert('Лозинката мора да има барем 6 карактери');
          return false;
        }
        return true;
      }
      alert('Внесете ги сите потребни информации');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userID = user.uid;

      await updateProfile(user, {
        displayName: name + " " + lastName,
      })

      await setDoc(doc(db, 'users', userID), {
        name: name,
        surname: lastName,
        email: email,
        interests: interests,
      });
      setIsLoading(false);
      // navigate('/')
      navigate('/wheel');
      console.log('Signup successful!');
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      console.error('Signup failed:', err);
    }
  };

  return (
    <>
      <Navbar />
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <StepperWrapper>
          <Stepper
            showProgressBar={true}
            initialStep={1}
            onFinalStepCompleted={handleSubmit}
            backButtonText="Назад"
            nextButtonText="Продолжи"
            validateStep={validateStep} // Pass the validation function
          >
            <Step>
              <StyledHeader>Регистрирај се</StyledHeader>
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
                  label="Е-пошта*"
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
                <p>
                  Веќе имаш профил? &nbsp;
                  <Link to={'/login'}>Најави се</Link>
                </p>
              </InputWrapper>
            </Step>
            <Step>
              <StyledHeader>Одбери ги твоите интереси</StyledHeader>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleInterestChange} value="спорт" />
                  }
                  label="Спорт"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleInterestChange} value="љубов" />
                  }
                  label="Љубов"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleInterestChange}
                      value="технологија"
                    />
                  }
                  label="Технологија"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleInterestChange} value="хумор" />
                  }
                  label="Хумор"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleInterestChange}
                      value="економија"
                    />
                  }
                  label="Економија"
                />
              </FormGroup>
            </Step>
            <Step>
              <ImageWrapper>
                <img
                  src="/slikiZaEshop/logoDark-1.jpg"
                  alt="Logo"
                  style={{
                    maxWidth: '100%',
                    objectFit: 'contain',
                    maxHeight: '100px',
                    height: 'auto',
                  }}
                />
              </ImageWrapper>
              <StyledHeader>Добредојдовте, {name}</StyledHeader>
              <Paragraph>
                Твојот профил можеш да го користиш за да добиваш различни
                награди, да резервираш маса во Среќа Бар, да ги следиш најновите
                понуди и многу други активности.
              </Paragraph>
            </Step>
          </Stepper>
        </StepperWrapper>
      )}

      <Footer />
    </>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StepperWrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

const StyledHeader = styled.h2`
  color: var(--logo-red);
  // font-size: 1.5em;
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
  height: 70px;
`;
const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 293px;
`;

export default Register;
