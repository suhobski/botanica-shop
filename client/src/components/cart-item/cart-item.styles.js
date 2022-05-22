import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const CartItemIcon = styled.img`
  width: 70px;
  margin-right: 25px;
  border-radius: 4px;
`;

export const CartItemDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 30px 30px;
  align-content: center;
  align-items: center;
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
  font-size: 20px;
`;

export const Price = styled.span`
  display: inline-block;
  padding: 0 8px 0 16px;
`;
