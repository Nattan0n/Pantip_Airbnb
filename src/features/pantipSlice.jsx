// pantipSlice.js

// pantipSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularThreads } from '../api/pantipApi';

export const fetchPopularThreads = createAsyncThunk(
  'pantip/fetchPopularThreads',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getPopularThreads();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const pantipSlice = createSlice({
  name: 'pantip',
  initialState: {
    popularThreads: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularThreads.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPopularThreads.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.popularThreads = action.payload;
      })
      .addCase(fetchPopularThreads.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch data';
      });
  }
});

export default pantipSlice.reducer;
