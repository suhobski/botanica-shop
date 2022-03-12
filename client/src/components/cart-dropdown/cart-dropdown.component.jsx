import React from "react";

import {
  CartDropdownContainer,
  CartItems,
  CartButton,
} from "./cart-dropdown.styles";

function CartDropdown() {
  return (
    <CartDropdownContainer>
      <CartItems />
      <CartButton>ОФОРМИТЬ ЗАКАЗ</CartButton>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
