import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaderItem,
  CheckoutHeaderTitle,
  CheckoutTotalCost,
  CheckoutTotalCostNumber,
} from './checkout.styles';

const Checkout = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalCost = useMemo(() => {
    const productCost = cartProducts.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return productCost.toFixed(2);
  }, [cartProducts]);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutHeaderItem>Товар</CheckoutHeaderItem>
        <CheckoutHeaderTitle>Название</CheckoutHeaderTitle>
        <span>Кол-во</span>
        <span>Стоимость</span>
        <span>Удалить</span>
      </CheckoutHeader>
      {cartProducts.map((product) => (
        <CheckoutItem key={product.id} product={product} />
      ))}
      <CheckoutTotalCost>
        ИТОГО: <CheckoutTotalCostNumber>{totalCost} р.</CheckoutTotalCostNumber>
      </CheckoutTotalCost>
    </CheckoutContainer>
  );
};

export default Checkout;
