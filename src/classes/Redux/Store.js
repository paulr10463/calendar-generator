// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import subjectsReducer from './ScheduleSlice';

const store = configureStore({
  reducer: {
    subjects: subjectsReducer,
  },
});

export default store;
