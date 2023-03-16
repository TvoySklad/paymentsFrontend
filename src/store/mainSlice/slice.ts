import { createSlice } from '@reduxjs/toolkit';
import { StoreSchema } from '../types/types';

const initialState: StoreSchema = {
  userName: '',
  userPhone: '',
  userEmail: '',
  city: '',
  address: '',
  addressId: '',
  boxSize: '',
  rentalPeriod: '',
  prolongation: false,
  prolongContract: '',
  prolongBoxNumber: '',
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserPhone: (state, action) => {
      state.userPhone = action.payload;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setAddressId: (state, action) => {
      state.addressId = action.payload;
    },
    setProlongation: (state, action) => {
      state.prolongation = action.payload;
    },
    setProlongContract: (state, action) => {
      state.prolongContract = action.payload;
    },
    setProlongBoxNumber: (state, action) => {
      state.prolongBoxNumber = action.payload;
    },
  },
});

export const { actions } = storeSlice;
export const { reducer } = storeSlice;