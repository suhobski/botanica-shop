import React from 'react';
import { useDispatch } from 'react-redux';

import {
  decreaseItemsCount,
  deleteItem,
  increaseItemsCount,
} from '../../redux/cart/cart.actions';

import IconButton from '../UI/buttons/icon-button.styles';
import {
  CheckoutItemContainer,
  CheckoutItemIcon,
  Price,
  PriceDetails,
  Title,
  QuantityNumber,
  CheckoutDeleteButton,
} from './checkout-item.styles';

const CheckoutItem = ({ product }) => {
  const { id, img, price, quantity, title } = product;
  const dispatch = useDispatch();

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
    <CheckoutItemContainer>
      <CheckoutItemIcon src={img} alt={title} />
      <Title>{title}</Title>
      <PriceDetails>
        <IconButton onClick={decreaseCountHandler}>&#10094;</IconButton>
        <QuantityNumber>{quantity}</QuantityNumber>
        <IconButton onClick={increaseCountHandler}>&#10095;</IconButton>
      </PriceDetails>
      <Price>{price} р.</Price>
      <CheckoutDeleteButton onClick={deleteProductFromCart}>
        &#10005;
      </CheckoutDeleteButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
