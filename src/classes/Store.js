// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import subjectsSlice from './ScheduleSlice';

const store = configureStore({
  reducer: {
    subject: subjectsSlice,
  },
});

export default store;
