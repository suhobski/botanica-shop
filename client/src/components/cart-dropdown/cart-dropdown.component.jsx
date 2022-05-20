import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  CartItems,
  CartButton,
} from "./cart-dropdown.styles";

function CartDropdown() {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartProducts.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </CartItems>
      <CartButton onClick={goToCheckoutHandler}>ОФОРМИТЬ ЗАКАЗ</CartButton>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
