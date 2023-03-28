import { StoreSchema } from '../types/types';

export const getStore = (state: { store: StoreSchema }) => state.store;
