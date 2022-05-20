import React, { useContext } from "react";

import { UserContext } from "../../context/user.context";
import { signAuthOut } from "../../utils/firebase/firebase.utils";

import { NavigationContainer } from "./navigation.styles";
import { NavigationLink } from "../navigation-link/navigation-link";
import { useDispatch, useSelector } from "react-redux";
import { closeMobileMenu } from "../../redux/mobile-menu/mobile-menu.actions";

const Navigation = () => {
  const dispatch = useDispatch();
  const { currentUser } = useContext(UserContext);
  const isMenuOpen = useSelector(
    (state) => state.mobileMenu.isMobileMenuVisible
  );

  const closeMenuHandle = () => {
    dispatch(closeMobileMenu());
  };

  return (
    <NavigationContainer isMenuOpen={isMenuOpen}>
      <NavigationLink onClick={closeMenuHandle} to="catalog">
        Каталог
      </NavigationLink>
      <NavigationLink onClick={closeMenuHandle} to="about-us">
        О нас
      </NavigationLink>
      {currentUser ? (
        <NavigationLink
          as="div"
          onClick={() => {
            signAuthOut();
            closeMenuHandle();
          }}
        >
          Выход
        </NavigationLink>
      ) : (
        <NavigationLink onClick={closeMenuHandle} to="sign-in">
          Вход
        </NavigationLink>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
