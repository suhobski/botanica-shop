import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { Icon, IconContainer, ItemCount } from "./cart-icon.styles";

function CartIcon() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const allQuantity = cartItems.reduce(
    (previousValue, cartItem) => previousValue + cartItem.quantity,
    0
  );
  return (
    <IconContainer onClick={() => dispatch(toggleCartHidden())}>
      <Icon />
      <ItemCount>{allQuantity}</ItemCount>
    </IconContainer>
  );
}

export default CartIcon;
