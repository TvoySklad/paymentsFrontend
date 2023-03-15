import { createSelector } from '@reduxjs/toolkit';
import { getStore } from './getStore';
// import { CounterSchema } from '../types/counterSchema';


export const getStoreValue = createSelector(getStore, (store: any) => store.value);