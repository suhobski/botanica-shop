import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  decreaseItemsCount,
  deleteItem,
  increaseItemsCount,
} from '../../redux/cart/cart.actions';

import DeleteButton from '../UI/buttons/delete-button.styles';
import IconButton from '../UI/buttons/icon-button.styles';
import {
  CartItemIcon,
  CartItemDetails,
  CartItemContainer,
  ItemPrice,
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
        <DeleteButton onClick={deleteProductFromCart}>&#10005;</DeleteButton>
        <ItemPrice>
          <IconButton onClick={decreaseCountHandler}>&#10094;</IconButton>
          {quantity}
          <IconButton onClick={increaseCountHandler}>&#10095;</IconButton>x
          <Price>{price}</Price>р.
        </ItemPrice>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
