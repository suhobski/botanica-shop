import styled from "styled-components";
import { secondBackgroundColor, textColor } from "../../style/theme";

const Button = styled.button`
  padding: 8px 16px;
  border: 1px solid ${textColor};
  border-radius: 12px;
  background: ${secondBackgroundColor};

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
