import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeCartDrawer } from '../../store/features/cart/cart.slice';

import CartItem from '../cart-item/cart-item.component';

import {
  CartItems,
  CartButton,
  CartDrawerWrap,
  CartDrawerContainer,
  TotalCost,
  TotalCostNumber,
} from './cart-drawer.styles';

const CartDrawer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isHidden = useSelector((state) => state.cart.hidden);
  const cartProducts = useSelector((state) => state.cart.cartItems);

  const totalCost = useMemo(() => {
    const productCost = cartProducts.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return productCost.toFixed(2);
  }, [cartProducts]);

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
        <TotalCost>
          ИТОГО: <TotalCostNumber>{totalCost} р.</TotalCostNumber>
        </TotalCost>
        <CartButton onClick={closeCartDropdown}>ПРОДОЛЖИТЬ ПОКУПКИ</CartButton>
        <CartButton onClick={goToCheckoutHandler}>ОФОРМИТЬ ЗАКАЗ</CartButton>
      </CartDrawerContainer>
    </CartDrawerWrap>
  );
};

export default CartDrawer;
