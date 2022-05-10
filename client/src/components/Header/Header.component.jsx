import React from "react";
import { withTheme } from "styled-components";
import { useTheme } from "../../context/ThemeContext";
import { connect, useSelector } from "react-redux";

import { HeaderContainer, Navigation, NavLink } from "./Header.styles";
import HeaderButton from "../UI/HeaderButton/HeaderButton.styles";

import { ReactComponent as Moon } from "../../assets/images/moon.svg";
import { ReactComponent as Sun } from "../../assets/images/sun.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ theme, currentUser }) => {
  const themeToggle = useTheme();
  const hidden = useSelector((state) => state.cart.hidden);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <h2>Botanica</h2>
      </NavLink>
      <CartIcon />
      <Navigation>
        <NavLink to="catalog">Каталог</NavLink>
        <NavLink to="about-us">О нас</NavLink>
        {currentUser ? (
          <NavLink as="div">Выход</NavLink>
        ) : (
          <NavLink to="sign-in">Вход</NavLink>
        )}
      </Navigation>
      <HeaderButton onClick={() => themeToggle.toggle()}>
        {theme.mode === "dark" ? <Moon /> : <Sun />}
      </HeaderButton>
      {hidden && <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default withTheme(connect(mapStateToProps)(Header));
