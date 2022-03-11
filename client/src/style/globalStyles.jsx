import { createGlobalStyle } from "styled-components";
import { textColor } from "../style/theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: inherit;
  }

  html {
    width:100vw;
    overflow-x:hidden;
  }

  html,
  body,
  #root {
    height: 100%;
    color: ${textColor};
  }
  ul, li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
