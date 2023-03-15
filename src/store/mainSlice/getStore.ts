// import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { StoreSchema } from '../types/types';

export const getStore = (state: { store: StoreSchema }) => state.store;
