import styled from "styled-components";
import { backgroundColor, textColor } from "../../style/theme";
import Button from "../button/Button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 240px;
  height: 380px;
  padding: 10px;
  border: 1px solid ${textColor};
  border-radius: 12px;
  background-color: ${backgroundColor};
  z-index: 5;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const CartButton = styled(Button)`
  margin-top: 10px;
`;
