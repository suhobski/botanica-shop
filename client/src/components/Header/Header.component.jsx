import React from "react";
import { withTheme } from "styled-components";
import { useTheme } from "../../context/ThemeContext";
import { connect } from "react-redux";

import { HeaderContainer, Navigation, NavLink } from "./Header.styles";

import { ReactComponent as Moon } from "../../assets/images/moon.svg";
import { ReactComponent as Sun } from "../../assets/images/sun.svg";
import { auth } from "../../firebase/firebase.utils";
import HeaderButton from "../UI/HeaderButton/HeaderButton.styles";

const Header = ({ theme, currentUser }) => {
  const themeToggle = useTheme();

  console.log("currentUser", currentUser);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <h2>Botanica</h2>
      </NavLink>
      <Navigation>
        <NavLink to="catalog">Каталог</NavLink>
        <NavLink to="about-us">О нас</NavLink>
        {currentUser ? (
          <NavLink as="div" onClick={() => auth.signOut()}>
            Выход
          </NavLink>
        ) : (
          <NavLink to="sign-in">Вход</NavLink>
        )}
      </Navigation>
      <HeaderButton onClick={() => themeToggle.toggle()}>
        {theme.mode === "dark" ? <Moon /> : <Sun />}
      </HeaderButton>
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default withTheme(connect(mapStateToProps)(Header));
