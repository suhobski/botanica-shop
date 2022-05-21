import React from "react";

import Logo from "../logo/logo.component";
import Cart from "../cart/cart.component";
import Navigation from "../navigation/navigation.component";
import ThemeButton from "../theme-button/theme-button.component";
import Burger from "../burger/burger.component";

import { HeaderContainer } from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <Logo />
    <Navigation />
    <ThemeButton />
    <Cart />
    <Burger />
  </HeaderContainer>
);

export default Header;
