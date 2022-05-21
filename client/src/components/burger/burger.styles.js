import styled, { css } from "styled-components";
import { textColor } from "../../style/theme";

export const BurgerWrap = styled.div`
  position: relative;
  display: none;
  width: 35px;
  height: 35px;
  padding: 5px;
  cursor: pointer;
  z-index: 50;

  @media (max-width: 500px) {
    display: block;
  }
`;

export const BurgerInner = styled.div`
  position: relative;
  width: 25px;
  height: 25px;

  &::before {
    content: "";
    position: absolute;
    top: 7px;
    display: block;
    width: 25px;
    height: 2px;
    background-color: ${textColor};
    transition: all 0.2s ease-in;

    ${({ active }) =>
      active &&
      css`
        transform: rotate(135deg);
        top: 12px;
      `}
  }

  &::after {
    content: "";
    position: absolute;
    top: 16px;
    display: block;
    width: 25px;
    height: 2px;
    background-color: ${textColor};
    transition: all 0.2s ease-in;

    ${({ active }) =>
      active &&
      css`
        transform: rotate(-135deg);
        top: 12px;
      `}
  }
`;
