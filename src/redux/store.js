import { configureStore } from '@reduxjs/toolkit';
import filter from './slice/filterSlice';
import sort from './slice/filterSlice';

export const store = configureStore({
  reducer: {
    filter,
    sort
}
})