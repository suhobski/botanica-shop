import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      {cartProducts.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default Checkout;
