import styled from 'styled-components';

import { ReactComponent as ShopingIcon } from '../../assets/images/shopping-bag.svg';
import { textColor } from '../../style/theme';

export const IconContainer = styled.div`
  position: relative;
  bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Icon = styled(ShopingIcon)`
  width: 24px;
  height: 24px;
  color: ${textColor};
`;

export const ItemCount = styled.span`
  position: absolute;
  top: 9px;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
