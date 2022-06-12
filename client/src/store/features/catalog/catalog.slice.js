import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase.utils';

export const fetchProducts = createAsyncThunk(
  'catalog/fetchProducts',
  async () => {
    const shopData = await getCategoriesAndDocuments();
    return shopData;
  }
);

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    plants: {},
    status: undefined,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.plants = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default catalogSlice.reducer;
