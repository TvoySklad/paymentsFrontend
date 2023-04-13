import { createSlice } from '@reduxjs/toolkit';
import { StoreSchema } from '../types/types';
import { fetchCoupons } from '../../services/couponsService';

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
  prolongContract: '',
  prolongBoxNumber: '',
  promo: '',
  promoActivated: false,
  promoSum: 1,
  coupon: '',
  couponActivated: false,
  couponActivatedValue: '',
  couponSum: 0,
  couponId: 0,
  totalSum: 0,
  toPaySum: 0,
  paymentType: '',
  subscriptionCost: 0,
  error: '',
  isLoading: false,
  fetchedCoupons: null
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
    setCouponActivatedValue: (state, action) => {
      state.couponActivatedValue = action.payload;
    },
    setCouponSum: (state, action) => {
      state.couponSum = action.payload;
    },
    setCouponId: (state, action) => {
      state.couponId = action.payload;
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
    setFetchedCoupons: (state, action) => {
      state.fetchedCoupons = action.payload;
    },
    resetStore: (state) => {
      state.boxSize = '';
      state.boxSizeIndex = null;
      state.rentalPeriod = '';
      state.rentalPeriodIndex = null;
      state.subscriptionCost = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoupons.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCoupons.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchCoupons.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions } = storeSlice;
export const { reducer } = storeSlice;
