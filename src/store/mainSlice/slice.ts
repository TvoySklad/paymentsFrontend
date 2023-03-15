import { createSlice } from '@reduxjs/toolkit';
import { StoreSchema } from '../types/types';

const initialState: StoreSchema = {
  value: 0,
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { actions } = storeSlice;
export const { reducer } = storeSlice;