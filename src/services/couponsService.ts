import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Coupon } from 'store/types/types';
import { actions } from 'store/mainSlice/slice';

export const fetchCoupons = createAsyncThunk(
  'coupons/fetchAllCoupons',
  async (_, thunkAPI) => {
    try {
      const [response1, response2] = await Promise.all([
        axios.get<Coupon[]>('https://642f292ec26d69edc877bdbb.mockapi.io/tvoysklad/coupons'),
        axios.get<Coupon[]>('https://642f292ec26d69edc877bdbb.mockapi.io/tvoysklad/coupons2')
      ]);

      const coupons = [...response1.data, ...response2.data];

      thunkAPI.dispatch(actions.setFetchedCoupons(coupons));
      return coupons;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

export const updateCoupon = createAsyncThunk(
  'coupons/fetchAllCoupons',
  async ({id, name}: any, thunkAPI) => {
    try {
      const address = `https://642f292ec26d69edc877bdbb.mockapi.io/tvoysklad/coupons${name[1] == '2' ? '2' : ''}/${id}`

      const response = await axios.put<Coupon>(address, { used: true });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);
