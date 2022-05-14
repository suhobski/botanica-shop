import React, { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import Button from "../../components/UI/Button.component";
import FormInput from "../../components/UI/FormInput/FormInput.component";

import { FormWrap } from "../sign-in/sign-in.styles";
import { SignUpWrap, SignUpTitle } from "./sign-up.styles";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  let navigate = useNavigate();
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
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      navigate("/sign-in", { replace: true });
      resetFormFields();
    } catch (error) {
      if ((error.code = "auth/email-already-in-use")) {
        alert("this email already in use");
      } else {
        console.log("user creation error", error);
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
