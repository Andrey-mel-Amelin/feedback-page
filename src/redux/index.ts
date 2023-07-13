import { configureStore } from '@reduxjs/toolkit';
import reviewSlice from './review/reviewSlice';

export const store = configureStore({
  reducer: {
    reviews: reviewSlice,
  },
});
