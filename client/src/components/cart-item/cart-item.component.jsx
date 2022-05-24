import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  decreaseItemsCount,
  deleteItem,
  increaseItemsCount,
} from '../../redux/cart/cart.actions';

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
  const { id, img, price, quantity, title, isAddedNow } = product;
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState(isAddedNow);

  if (activeItem) {
    setTimeout(() => {
      setActiveItem(false);
    }, 1000);
  }

  const deleteProductFromCart = () => {
    dispatch(deleteItem(id));
  };

  const increaseCountHandler = () => {
    if (quantity === 99) {
      return;
    }

    dispatch(increaseItemsCount(id));
  };

  const decreaseCountHandler = () => {
    if (quantity === 1) {
      return;
    }

    dispatch(decreaseItemsCount(id));
  };

  return (
    <CartItemContainer activeItem={activeItem}>
      <CartItemIcon src={img} alt={title} />
      <CartItemDetails>
        <span>{title}</span>
        <CartButtonDelete onClick={deleteProductFromCart}>
          &#10005;
        </CartButtonDelete>
        <ItemPrice>
          <CartButton onClick={decreaseCountHandler}>&#10094;</CartButton>
          {quantity}
          <CartButton onClick={increaseCountHandler}>&#10095;</CartButton>x
          <Price>{price}</Price>р.
        </ItemPrice>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
