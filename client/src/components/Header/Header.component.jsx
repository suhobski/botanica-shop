import React, { useContext } from "react";
import { withTheme } from "styled-components";
import { useTheme } from "../../context/ThemeContext";
import { useSelector } from "react-redux";

// import { setCurrentUser } from "../../redux/user/user.actions";
import { UserContext } from "../../context/user.context";

import { ReactComponent as Moon } from "../../assets/images/moon.svg";
import { ReactComponent as Sun } from "../../assets/images/sun.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { signAuthOut } from "../../utils/firebase/firebase.utils";

import { HeaderContainer, Navigation, NavLink } from "./Header.styles";
import HeaderButton from "../UI/HeaderButton/HeaderButton.styles";

const Header = ({ theme }) => {
  const themeToggle = useTheme();
  const { currentUser } = useContext(UserContext);
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
          <NavLink as="div" onClick={signAuthOut}>
            Выход
          </NavLink>
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

export default withTheme(Header);
