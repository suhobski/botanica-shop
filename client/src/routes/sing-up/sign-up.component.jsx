import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import Button from '../../components/UI/buttons/button.styles';
import FormInput from '../../components/form-input/form-input.component';

import { FormWrap } from '../sign-in/sign-in.styles';
import { SignUpWrap, SignUpTitle } from './sign-up.styles';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      navigate('/sign-in', { replace: true });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('email-already-in-use');
      } else {
        console.log('user creation error', error);
      }
    }
  };

  return (
    <SignUpWrap>
      <SignUpTitle>
        Регистрация по
        <br /> почте и паролю
      </SignUpTitle>
      <FormWrap onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="Имя"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          type="email"
          label="Электронная почта"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          type="password"
          label="Пароль"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          type="password"
          label="Повторите пароль"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Регистрация</Button>
      </FormWrap>
    </SignUpWrap>
  );
};

export default SignUp;
