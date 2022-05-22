import styled, { keyframes } from 'styled-components';
import { backgroundColor } from '../../style/theme';

import Button from '../button/button.styles';

const cartIn = keyframes`
  from {
    right: -320px;
  }
  to { 
    right: 0;
  }
`;

export const CartDropdownWrap = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  width: 110vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const CartDropdownContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 320px;
  height: calc(100vh - 50px);
  padding: 30px 10px 10px;
  background-color: ${backgroundColor};
  animation: ${cartIn} 0.3s linear;
  animation-fill-mode: forwards;
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
