import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  CartItems,
  CartButton,
} from "./cart-dropdown.styles";

function CartDropdown() {
  const cartProducts = useSelector((state) => state.cart.cartItems);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartProducts.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </CartItems>
      <CartButton>ОФОРМИТЬ ЗАКАЗ</CartButton>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
