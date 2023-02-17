import React from 'react';
import { Context } from '../context';

export const useStore = () => {
  const store = React.useContext(Context);
  if (!store) {
    throw new Error('Can not use `useStore` outside of the `EnvieThemeProvider`');
  }
  return store;
};
