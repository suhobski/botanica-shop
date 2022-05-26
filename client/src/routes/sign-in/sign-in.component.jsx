import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import {
  FormFooter,
  FormWrap,
  SingInPageWrap,
  Text,
  StyledLink,
  SignInTitle,
} from './sign-in.styles';

import Button from '../../components/UI/buttons/button.styles';
import FormInput from '../../components/form-input/form-input.component';

const SingIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate('/catalog', { replace: true });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      navigate('/catalog', { replace: true });
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log('error', error.message);
    }
  };

  return (
    <SingInPageWrap>
      <SignInTitle>
        Вход через
        <br />
        почту
      </SignInTitle>
      <FormWrap onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          id="email"
          label="Почта"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          name="password"
          id="password"
          label="Пароль"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <FormFooter>
          <Button type="submit">Вход</Button>
          <Button google onClick={signInWithGoogle} type="button">
            Вход через Google
          </Button>
        </FormFooter>
      </FormWrap>
      <Text>
        ...или <StyledLink to="/sign-up">зарегистрируйся</StyledLink>,
        <br />
        если нет аккаунта
      </Text>
    </SingInPageWrap>
  );
};

export default SingIn;
