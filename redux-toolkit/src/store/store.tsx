import { configureStore } from '@reduxjs/toolkit';
import sliceCounter from './slices/sliceCounter';

const store = configureStore({
  reducer: {
    counter: sliceCounter,
  }
});

export default store;