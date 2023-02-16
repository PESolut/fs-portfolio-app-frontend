import { configureStore } from '@reduxjs/toolkit';
import myReducer from './myReducer';

const store = configureStore({
  reducer: {
    mySlice: myReducer,
  },
});

export default store;
