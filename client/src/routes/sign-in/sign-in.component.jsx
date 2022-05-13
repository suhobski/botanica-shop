import React, { useState } from "react";

import {
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import {
  FormFooter,
  FormWrap,
  SingInPageWrap,
  Text,
  StyledLink,
  SignInTitle,
} from "./sign-in.styles";

import Button from "../../components/UI/Button.component";
import FormInput from "../../components/UI/FormInput/FormInput.component";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";

function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    dispatch(setCurrentUser(user));

    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);

      dispatch(setCurrentUser(user));

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <SingInPageWrap>
      <SignInTitle>
        Вход через
        <br />
        почту и пароль
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
          <Button google onClick={logGoogleUser} type="button">
            Вход через Google
          </Button>
        </FormFooter>
      </FormWrap>
      <Text>
        ...или <StyledLink to="/sign-up">зарегистрируйся</StyledLink>&nbsp;если
        нет аккаунта
      </Text>
    </SingInPageWrap>
  );
}

export default SingIn;
