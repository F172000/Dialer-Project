// store.js
import { configureStore } from '@reduxjs/toolkit';
import dialerReducer from './dialerReducer';

const store = configureStore({
  reducer: {
    dialer: dialerReducer,
  },
});

export default store;