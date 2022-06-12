import { combineReducers, configureStore } from '@reduxjs/toolkit';

import mobileMenuReducer from './features/mobile-menu/mobileMenuSlice';
import cartReducer from './features/cart/cart.slice';
import catalogReducer from './features/catalog/catalog.slice';
import userReducer from './features/user/user.slice';

const rootReducer = combineReducers({
  mobileMenu: mobileMenuReducer,
  cart: cartReducer,
  catalog: catalogReducer,
  user: userReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['user/setCurrentUser'],
      },
    }),
});
