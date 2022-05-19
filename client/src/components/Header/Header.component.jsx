import React from "react";

import Logo from "../logo/logo.component";
import Cart from "../cart/cart-component";
import Navigation from "../navigation/navigation.component";
import ThemeButton from "../theme-button/theme-button.component";

import { HeaderContainer } from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <Logo />
    <Cart />
    <Navigation />
    <ThemeButton />
  </HeaderContainer>
);

export default Header;
