import styled from "styled-components";
import { buttonTextColor } from "../../style/theme";

export const Button = styled.button`
  background: transparent;
  border: none;
  border-radius: 0.3em;
  box-shadow: none;
  color: ${buttonTextColor};
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em;
`;
