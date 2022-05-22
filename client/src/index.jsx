import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import { ThemeContext } from './context/ThemeContext';
import { UserProvider } from './context/user.context';

import App from './App';

import GlobalStyle from './style/globalStyles';
import './style/fonts.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/botanica-shop">
      <Provider store={store}>
        <UserProvider>
          <ThemeContext>
            <GlobalStyle />
            <App />
          </ThemeContext>
        </UserProvider>
      </Provider>
    </BrowserRouter>{' '}
  </React.StrictMode>
);
