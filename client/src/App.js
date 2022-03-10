import { ThemeContext } from "./context/ThemeContext.jsx";
import { BrowserRouter } from "react-router-dom";

import AppLayout from "./pages/AppLayout/AppLayout.jsx";

import GlobalStyle from "./style/globalStyles.jsx";
import "./style/fonts.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeContext>
        <GlobalStyle />
        <AppLayout />
      </ThemeContext>
    </BrowserRouter>
  );
}

export default App;
