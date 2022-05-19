import React from "react";
import { useSelector } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Cart = () => {
  const hidden = useSelector((state) => state.cart.hidden);

  return (
    <>
      <CartIcon />
      {hidden && <CartDropdown />}
    </>
  );
};

export default Cart;
