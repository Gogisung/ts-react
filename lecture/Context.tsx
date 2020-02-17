import * as React from 'react';
import { createContext } from 'react';
import { userStore, postStore } from './store';

export const storeContext = createContext({
  userStore,
  postStore,
});

export const StoreProvider = ({ children }) => {
  return (
    <storeContext.Provider value={{ userStore, postStore }}>
      {children}
    </storeContext.Provider>
  )
}