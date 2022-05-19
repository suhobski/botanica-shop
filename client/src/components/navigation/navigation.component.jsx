import React, { useContext } from "react";

import { UserContext } from "../../context/user.context";
import { signAuthOut } from "../../utils/firebase/firebase.utils";

import { NavigationContainer } from "./navigation.styles";
import { NavigationLink } from "../navigation-link/navigation-link";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <NavigationContainer>
      <NavigationLink to="catalog">Каталог</NavigationLink>
      <NavigationLink to="about-us">О нас</NavigationLink>
      {currentUser ? (
        <NavigationLink as="div" onClick={signAuthOut}>
          Выход
        </NavigationLink>
      ) : (
        <NavigationLink to="sign-in">Вход</NavigationLink>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
