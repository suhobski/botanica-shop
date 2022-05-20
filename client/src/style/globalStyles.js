import { createGlobalStyle } from "styled-components";
import { backgroundColor, textColor } from "./theme";

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
  }
  
  body {
    min-height: 100vh;
    color: ${textColor};
    background: ${backgroundColor};
  }
  
  ul, li {
    list-style-type: none;
  }
`;

export default GlobalStyle;
