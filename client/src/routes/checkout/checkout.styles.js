import styled from 'styled-components';
import { textColor } from '../../style/theme';

export const CheckoutContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 20px auto;
  z-index: 0;
`;

export const CheckoutHeader = styled.header`
  display: grid;
  grid-template-columns: minmax(70px, 120px) 1fr 1fr 1fr 90px;
  gap: 20px;
  justify-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${textColor};

  @media (max-width: 767px) {
    display: none;
  }
`;

export const CheckoutHeaderItem = styled.span`
  justify-self: left;
`;

export const CheckoutHeaderTitle = styled.span`
  justify-self: left;
`;

export const CheckoutTotalCost = styled.h2`
  margin: 18px 0;
  font-weight: 400;
  text-align: right;
`;

export const CheckoutTotalCostNumber = styled.span`
  display: inline-block;
  margin: 0 10px;
`;
