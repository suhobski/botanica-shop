import { createGlobalStyle } from "styled-components";
import { textColor } from "../style/theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: inherit;
  }

  html,
  body,
  #root {
    height: 100%;
    color: ${textColor};
  }
`;

export default GlobalStyle;
