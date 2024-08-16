// store.jsx

import { configureStore } from '@reduxjs/toolkit';
import pantipReducer from './pantipSlice';

const store = configureStore({
  reducer: {
    pantip: pantipReducer,
  },
});

export default store;
