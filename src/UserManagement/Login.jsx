import React, { useState } from 'react';
import styled from 'styled-components';
import CustomTextField from './CustomTextField';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from '@firebase/auth';
import Spinner from './Spinner';
import { useAuth } from '../firebase/authContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../shumaComponents/Navbar';
import Footer from '../shumaComponents/Footer';
import Stepper, { Step } from './Stepper/Stepper';

const Container = styled.div`
  max-width: 28rem;
  margin: 6rem auto;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: all 350ms;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 350ms;
  //   padding-block: 40px;
`;

const StyledHeader = styled.h2`
  color: var(--logo-red);
  // font-size: 1.5em;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 10rem;
  transition: all 350ms;
`;

const Button = styled.button`
  transition: all 350ms;
  display: flex;
  align-self: end;
  margin-top: 2.5rem;
  border-radius: 5px;
  background-color: var(--logo-red);
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: .7rem 1.2rem;
  border: 1px solid black;
  cursor: pointer;

  &: hover {
  background-color: var(--hover-red);
  }
}
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // proveri dali korisnik e logiran
  // const { currentUser } = useAuth()

  // if (currentUser) console.log("logiran")
  // else console.log("nelogiran")

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login Successful!');
      setLoading(false);
      navigate('/wheel');
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <Stepper
          showProgressBar={false}
          initialStep={1}
          onFinalStepCompleted={handleSubmit}
          backButtonText="Назад"
          nextButtonText="Продолжи"
          endButtonText="Продолжи"
          validateStep={() => console.log(1)}
          isLogin={true}
        >
          <Step>
            <InputWrapper>
              <>
                <StyledHeader>Добредојде назад</StyledHeader>
                {error && <p style={{ color: 'red' }}>Обидете се повторно</p>}
                <CustomTextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Е-пошта*"
                  type="email"
                  // placeholder="demo@srekja.mk"
                />
                <CustomTextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Лозинка*"
                  type="password"
                  // placeholder="do2as-asd34-asdnj"
                />
              </>
            </InputWrapper>
          </Step>
        </Stepper>
      )}
      <Footer />
    </>
  );
};

export default Login;
