import styled from 'styled-components';
import { secondBackgroundColor } from '../../style/theme';

export const CartItemContainer = styled.div`
  display: flex;
  padding: 4px;
  margin: 4px 4px 10px;
  background-color: ${({ activeItem }) =>
    activeItem ? secondBackgroundColor : 'transparent'};
`;

export const CartItemIcon = styled.img`
  width: 70px;
  margin-right: 15px;
  border-radius: 4px;
`;

export const CartItemDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  align-content: start;
  align-items: start;
  row-gap: 8px;
  width: 100%;
`;

export const ItemPrice = styled.p`
  position: relative;
  right: 16px;
  grid-column: 1 / -1;
  width: 100%;
  text-align: justify;
`;

export const Price = styled.span`
  display: inline-block;
  padding: 0 8px 0 16px;
`;
