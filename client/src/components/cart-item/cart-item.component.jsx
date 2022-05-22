import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/cart/cart.actions';

import {
  CartItemIcon,
  CartItemDetails,
  CartItemContainer,
  ItemPrice,
  CartButton,
  CartButtonDelete,
  Price,
} from './cart-item.styles';

const CartItem = ({ product }) => {
  const { id, img, price, quantity, title } = product;
  const dispatch = useDispatch();

  const deleteProductFromCart = () => {
    dispatch(deleteItem(id));
  };

  return (
    <CartItemContainer>
      <CartItemIcon src={img} alt={title} />
      <CartItemDetails>
        <span>{title}</span>
        <CartButtonDelete onClick={deleteProductFromCart}>
          &#10005;
        </CartButtonDelete>
        <ItemPrice>
          <CartButton>&#10094;</CartButton>
          {quantity}
          <CartButton>&#10095;</CartButton>x<Price>{price}</Price>р.
        </ItemPrice>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
