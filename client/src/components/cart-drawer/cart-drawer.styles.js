import styled, { keyframes } from 'styled-components';
import { backgroundColor } from '../../style/theme';

import Button from '../UI/buttons/button.styles';

const cartIn = keyframes`
  from {
    right: -320px;
  }
  to { 
    right: 0;
  }
`;

export const CartDrawerWrap = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  width: 110vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const CartDrawerContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 320px;
  height: calc(100vh - 50px);
  padding: 4px;
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
  margin: 10px 8px 0;
`;

export const TotalCost = styled.h2`
  margin: 18px 0;
  padding: 0 8px;
  font-weight: 400;
`;

export const TotalCostNumber = styled.span`
  display: inline-block;
  margin: 0 10px;
`;
