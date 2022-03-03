import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import studentReducer from '../features/students/studentHelper';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    student: studentReducer,
  },
});