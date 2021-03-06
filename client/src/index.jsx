import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import { ThemeContext } from './context/ThemeContext';

import App from './App';

import GlobalStyle from './style/globalStyles';
import './style/fonts.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/botanica-shop">
      <Provider store={store}>
        <ThemeContext>
          <GlobalStyle />
          <App />
        </ThemeContext>
      </Provider>
    </BrowserRouter>{' '}
  </React.StrictMode>
);
