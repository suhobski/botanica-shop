import React from "react";
import { useDispatch } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { Icon, IconContainer, ItemCount } from "./cart-icon.styles";

function CartIcon() {
  const dispatch = useDispatch();
  return (
    <IconContainer onClick={() => dispatch(toggleCartHidden())}>
      <Icon />
      <ItemCount>0</ItemCount>
    </IconContainer>
  );
}

export default CartIcon;
