import { ThemeContext } from "./context/ThemeContext.jsx";
import { BrowserRouter } from "react-router-dom";

import AppLayout from "./components/AppLayout/AppLayout.component.jsx";

import GlobalStyle from "./style/globalStyles.jsx";
import "./style/fonts.css";

function App() {
  return (
    <BrowserRouter basename="/botanica-shop">
      <ThemeContext>
        <GlobalStyle />
        <AppLayout />
      </ThemeContext>
    </BrowserRouter>
  );
}

export default App;
