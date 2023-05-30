import { createSlice } from '@reduxjs/toolkit';
import fetchCoinsData from './coinsActions';

const initialCoinsState = {
  coins: [],
  filteredArray: [],
};

const coinsSlice = createSlice({
  name: 'coins',
  initialState: initialCoinsState,
  reducers: {
    filterCoins(state, action) {
      state.filteredArray = action.payload;
    },
    resetFilteredArray(state, action) {
      state.filteredArray = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoinsData.fulfilled, (state, action) => {
      state.coins = action.payload;
    });
  },
});

export const coinsActions = coinsSlice.actions;

export default coinsSlice.reducer;
