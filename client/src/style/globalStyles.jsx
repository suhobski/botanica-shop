import { createGlobalStyle } from "styled-components";
import { backgroundColor, textColor } from "../style/theme";

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
  a {
    text-decoration: none;
  }

  h2 {
    font-size: 30px;
    font-weight: 400;
  }
`;

export default GlobalStyle;
