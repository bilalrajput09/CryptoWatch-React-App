import { configureStore } from '@reduxjs/toolkit';
import coinsSlice from './coinsSlice';

const store = configureStore({
  reducer: { coins: coinsSlice },
});

export default store;
