import { createSlice } from '@reduxjs/toolkit';

export const mobileMenuSlice = createSlice({
  name: 'mobile-menu',
  initialState: {
    isMobileMenuVisible: false,
  },
  reducers: {
    toggleMobileMenuVisibility: (state) => {
      state.isMobileMenuVisible = !state.isMobileMenuVisible;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuVisible = false;
    },
  },
});

export const { toggleMobileMenuVisibility, closeMobileMenu } =
  mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;
