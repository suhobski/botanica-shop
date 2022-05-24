import styled from 'styled-components';
import { textColor } from '../../style/theme';

export const CartItemContainer = styled.div`
  display: flex;
  padding: 4px;
  margin-bottom: 4px 4px 10px;
  border: 1px solid
    ${({ activeItem }) => (activeItem ? textColor : 'transparent')};
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

export const CartButton = styled.button`
  display: inline-block;
  margin: 0 8px;
  padding: 8px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const CartButtonDelete = styled(CartButton)`
  position: relative;
  bottom: 8px;
  font-size: 20px;
`;

export const Price = styled.span`
  display: inline-block;
  padding: 0 8px 0 16px;
`;
