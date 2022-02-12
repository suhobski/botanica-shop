import { ThemeContext } from "./context/ThemeContext.jsx";
import AppLayout from "./pages/AppLayout/AppLayout.jsx";
import GlobalStyle from "./style/globalStyles.jsx";
import "./style/fonts.css";

function App() {
  return (
    <>
      <ThemeContext>
        <GlobalStyle />
        <AppLayout />
      </ThemeContext>
    </>
  );
}

export default App;
