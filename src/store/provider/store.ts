import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../mainSlice/slice';

export const createReduxStore = () => {
  return configureStore({
    reducer: { store: reducer },
  });
};
