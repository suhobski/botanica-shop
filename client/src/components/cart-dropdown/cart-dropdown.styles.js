import styled from "styled-components";
import { backgroundColor, textColor } from "../../style/theme";
import Button from "../UI/Button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 30px;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 340px;
  padding: 10px;
  border: 1px solid ${textColor};
  border-radius: 12px;
  background-color: ${backgroundColor};
  z-index: 5;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const CartButton = styled(Button)`
  margin-top: auto;
`;
