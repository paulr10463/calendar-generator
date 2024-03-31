// arraySlice.js
import { createSlice } from '@reduxjs/toolkit';
import Subject from '../Models/Subject';

const subjectsSlice = createSlice({
  name: 'subjectsNames',
  initialState : [],
  reducers: {
    addSubject: (state, action) => {
      const subjectName = action.payload;
      return [...state, subjectName];
    },
    getNames: (state, action) => {
      return state;
    },
  },
});

export const { addSubject} = subjectsSlice.actions;
export default subjectsSlice.reducer;
