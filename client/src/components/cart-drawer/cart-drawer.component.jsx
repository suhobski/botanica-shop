import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeCartDrawer } from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownWrap,
  CartDropdownContainer,
  CartItems,
  CartButton,
} from './cart-drawer.styles';

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isHidden = useSelector((state) => state.cart.hidden);
  const cartProducts = useSelector((state) => state.cart.cartItems);

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  const closeCartDropdown = () => {
    dispatch(closeCartDrawer());
  };

  if (isHidden) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }

  return (
    <CartDropdownWrap onClick={closeCartDropdown} isHidden={isHidden}>
      <CartDropdownContainer isHidden={isHidden}>
        <CartItems>
          {cartProducts.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </CartItems>
        <CartButton onClick={goToCheckoutHandler}>ОФОРМИТЬ ЗАКАЗ</CartButton>
      </CartDropdownContainer>
    </CartDropdownWrap>
  );
};

export default CartDropdown;
