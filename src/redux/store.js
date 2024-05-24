import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user/UserSlice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
