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
  boxSizeIndex: null,
  rentalPeriod: '',
  rentalPeriodIndex: null,
  prolongation: false,
  prolongContract: '',
  prolongBoxNumber: '',
  promo: '',
  promoActivated: false,
  promoSum: 0,
  coupon: '',
  couponActivated: false,
  couponSum: 0,
  totalSum: 0,
  toPaySum: 0,
  paymentType: '',
  subscriptionCost: 0
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
    setBoxSize: (state, action) => {
      state.boxSize = action.payload;
    },
    setBoxSizeIndex: (state, action) => {
      state.boxSizeIndex = action.payload;
    },
    setRentalPeriod: (state, action) => {
      state.rentalPeriod = action.payload;
    },
    setRentalPeriodIndex: (state, action) => {
      state.rentalPeriodIndex = action.payload;
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
    setPromo: (state, action) => {
      state.promo = action.payload;
    },
    setPromoActivated: (state, action) => {
      state.promoActivated = action.payload;
    },
    setPromoSum: (state, action) => {
      state.promoSum = action.payload;
    },
    setCoupon: (state, action) => {
      state.coupon = action.payload;
    },
    setCouponActivated: (state, action) => {
      state.couponActivated = action.payload;
    },
    setCouponSum: (state, action) => {
      state.couponSum = action.payload;
    },
    setTotalSum: (state, action) => {
      state.totalSum = action.payload;
    },
    setToPaySum: (state, action) => {
      state.toPaySum = action.payload;
    },
    setPaymentType: (state, action) => {
      state.paymentType = action.payload;
    },
    setSubscriptionCost: (state, action) => {
      state.subscriptionCost = action.payload;
    },
    resetStore: (state) => {
      state.boxSize = '';
      state.boxSizeIndex = null;
      state.rentalPeriod = '';
      state.rentalPeriodIndex = null;
      state.subscriptionCost = 0;
    },
  },
});

export const { actions } = storeSlice;
export const { reducer } = storeSlice;
