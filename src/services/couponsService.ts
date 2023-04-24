import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Coupon } from 'store/types/types';
import { actions } from 'store/mainSlice/slice';

export const fetchCoupon = createAsyncThunk(
  'coupons/fetchCoupon',
  async (value: string, thunkAPI) => {
    try {
      const response = await axios.get<Coupon>(`http://45.84.224.129/coupons/${value}`);
      thunkAPI.dispatch(actions.setFetchedCoupon(response.data));

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const updateCoupon = createAsyncThunk(
  'coupons/updateCouponStatus',
  async (value: string, thunkAPI) => {
    try {
      const address = `http://45.84.224.129/coupons/${value}`;

      const response = await axios.patch<Coupon>(address);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);
