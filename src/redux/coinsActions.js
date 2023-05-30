import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coinstats.app/public/v1/coins';

const fetchCoinsData = createAsyncThunk('fetch/coins', async () => {
  const response = await fetch(url);
  const data = await response.json();

  const modifiedDataArray = data.coins.map((coin) => ({
    id: coin.id,
    name: coin.name,
    totalSupply: coin.totalSupply,
    icon: coin.icon,
    marketCap: coin.marketCap,
    price: coin.price,
    priceChange1Day: coin.priceChange1d,
    priceChange1Hour: coin.priceChange1h,
    priceChange1Week: coin.priceChange1w,
    rank: coin.rank,
    symbol: coin.symbol,
    twitter: coin.twitterUrl,
    volume: coin.volume,
    website: coin.websiteUrl,
  }));
  return modifiedDataArray;
});

export default fetchCoinsData;
