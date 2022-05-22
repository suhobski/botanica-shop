import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { Icon, IconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
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

  return (
    <IconContainer onClick={openCartDrawer}>
      <Icon />
      <ItemCount>{allQuantity}</ItemCount>
    </IconContainer>
  );
};

export default CartIcon;
