import styled from 'styled-components';
import { textColor } from '../../style/theme';
import DeleteButton from '../UI/buttons/delete-button.styles';

export const CheckoutItemContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 1fr 1fr 90px;
  align-items: center;
  justify-items: center;
  column-gap: 20px;
  max-width: 1000px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${textColor};

  @media (max-width: 767px) {
    grid-template-columns: 70px 1fr 1fr 50px;
    gap: 8px;
  }
`;

export const CheckoutItemIcon = styled.img`
  width: 100%;
  border-radius: 4px;

  @media (max-width: 767px) {
    grid-row: 1 / span 2;
  }
`;

export const Title = styled.p`
  position: relative;
  left: 10px;
  justify-self: left;

  @media (max-width: 767px) {
    grid-column: 2 / span 2;
  }
`;

export const PriceDetails = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-items: center;
  width: 105px;

  @media (max-width: 767px) {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    justify-self: left;
  }
`;

export const Price = styled.span`
  display: inline-block;
  padding: 0 8px 0 16px;

  @media (max-width: 767px) {
    grid-column: 3 / span 2;
    justify-self: right;
  }
`;

export const QuantityNumber = styled.span`
  position: relative;
  top: 4px;
`;

export const CheckoutDeleteButton = styled(DeleteButton)`
  @media (max-width: 767px) {
    grid-row: 1 / 2;
    grid-column: -1 / -2;
  }
`;
