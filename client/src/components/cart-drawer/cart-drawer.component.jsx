import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeCartDrawer } from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component';

import {
  CartItems,
  CartButton,
  CartDrawerWrap,
  CartDrawerContainer,
} from './cart-drawer.styles';

const CartDrawer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isHidden = useSelector((state) => state.cart.hidden);
  const cartProducts = useSelector((state) => state.cart.cartItems);

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    dispatch(closeCartDrawer());
  };

  const closeCartDropdown = () => {
    dispatch(closeCartDrawer());
  };

  const containerHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <CartDrawerWrap onClick={closeCartDropdown} isHidden={isHidden}>
      <CartDrawerContainer onClick={containerHandler}>
        <CartItems>
          {cartProducts.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </CartItems>
        <CartButton onClick={goToCheckoutHandler}>ОФОРМИТЬ ЗАКАЗ</CartButton>
      </CartDrawerContainer>
    </CartDrawerWrap>
  );
};

export default CartDrawer;
