import React from "react";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import AppLayout from "./components/AppLayout/AppLayout.component.jsx";

import GlobalStyle from "./style/globalStyles.jsx";
import "./style/fonts.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/botanica-shop">
        <ThemeContext>
          <GlobalStyle />
          <AppLayout />
        </ThemeContext>
      </BrowserRouter>{" "}
    </Provider>
  );
}

export default App;
