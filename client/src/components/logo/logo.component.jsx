import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeMobileMenu } from '../../redux/mobile-menu/mobile-menu.actions';

import LogoLink from './logo.styles';

const Logo = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(
    (state) => state.mobileMenu.isMobileMenuVisible
  );

  const closeMenuHandle = () => {
    if (isMenuOpen) {
      dispatch(closeMobileMenu());
    }
  };

  return (
    <LogoLink onClick={closeMenuHandle} to="/">
      <h2>Botanica</h2>
    </LogoLink>
  );
};

export default Logo;
