import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);

  return <div>Checkout</div>;
};

export default Checkout;
