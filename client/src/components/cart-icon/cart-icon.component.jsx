import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { toggleCartHidden } from '../../store/features/cart/cart.slice';

import { Icon, IconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const allQuantity = cartItems.reduce(
    (previousValue, cartItem) => previousValue + cartItem.quantity,
    0
  );

  const openCartDrawer = () => {
    if (!allQuantity) {
      return;
    }

    dispatch(toggleCartHidden());
  };

  const cartIconHandler = () => {
    if (location.pathname === '/checkout') {
      return;
    }

    openCartDrawer();
  };

  return (
    <IconContainer onClick={cartIconHandler}>
      <Icon />
      <ItemCount>{allQuantity}</ItemCount>
    </IconContainer>
  );
};

export default CartIcon;
