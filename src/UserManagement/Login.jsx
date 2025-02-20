import React, { useState } from 'react';
import styled from 'styled-components';
import CustomTextField from './CustomTextField';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from '@firebase/auth';
import Spinner from './Spinner';
import { useAuth } from '../firebase/authContext';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 28rem;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
//   padding-block: 40px;
`;


const StyledHeader = styled.h2`
    color: var(--logo-red);
    // font-size: 1.5em;
    margin-bottom: 10px;
`;

const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
  transition: all 350ms;
  display: flex;
  align-self: end;
  margin-top: 2.5rem;
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    // proveri dali korisnik e logiran
    // const { currentUser } = useAuth()

    // if (currentUser) console.log("logiran") 
    // else console.log("nelogiran")

    const handleSubmit = async () => {
        setError(null)
        setLoading(true)
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Login Successful!");
            setLoading(false)
            navigate('/');
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    return (
        <Container>
            <InputWrapper>
                {loading ?
                   <SpinnerWrapper>
                        <Spinner />
                    </SpinnerWrapper> :
                    (
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
                            <Button
                                onClick={handleSubmit}
                            >
                                Продолжи
                            </Button>
                        </>
                    )}
            </InputWrapper>
        </Container>
    );
};

export default Login;