import React from 'react';

import {
  CartItemIcon,
  CartItemDetails,
  CartItemContainer,
} from './cart-item.styles';

const CartItem = ({ product }) => {
  const { img, price, quantity, title } = product;

  return (
    <CartItemContainer>
      <CartItemIcon src={img} alt={title} />
      <CartItemDetails>
        <span>{title}</span>
        <span>
          {quantity} x {price} р.
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
