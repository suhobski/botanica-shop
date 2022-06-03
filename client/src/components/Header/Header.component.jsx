import React from 'react';

import Logo from '../logo/logo.component';
import Cart from '../cart/cart.component';
import Navigation from '../navigation/navigation.component';
import Burger from '../burger/burger.component';

import HeaderContainer from './header.styles';
import ThemeButtonStyles from '../UI/buttons/theme-button/theme-button.styles';

const Header = () => (
  <HeaderContainer>
    <Logo />
    <Navigation />
    <ThemeButtonStyles />
    <Cart />
    <Burger />
  </HeaderContainer>
);

export default Header;
