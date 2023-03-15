

import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from './StateSchema';
import { createReduxStore } from './store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = createReduxStore();

  return <Provider store={store}>{children}</Provider>;
};