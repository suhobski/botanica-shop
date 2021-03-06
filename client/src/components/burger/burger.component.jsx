import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileMenuVisibility } from '../../store/features/mobile-menu/mobileMenuSlice';

import { BurgerInner, BurgerWrap } from './burger.styles';

const Burger = () => {
  const dispatch = useDispatch();
  const isMenuVisible = useSelector(
    (state) => state.mobileMenu.isMobileMenuVisible
  );

  const burgerClickHandle = () => {
    dispatch(toggleMobileMenuVisibility());
  };

  return (
    <BurgerWrap onClick={burgerClickHandle}>
      <BurgerInner active={isMenuVisible} />
    </BurgerWrap>
  );
};

export default Burger;
