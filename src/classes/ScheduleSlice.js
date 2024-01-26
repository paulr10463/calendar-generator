// arraySlice.js
import { createSlice } from '@reduxjs/toolkit';

const subjectsSlice = createSlice({
  name: 'subjectsArray',
  initialState : [],
  reducers: {
    setSubjects: (state, action) => action.payload, // Setter para establecer todo el horario
    addSubject: (state, action) => [...state, action.payload], // Agregar una clase al horario
    removeSubject: (state, action) => state.filter(cls => cls.id !== action.payload), // Eliminar una clase del horario
    updateSubject: (state, action) => {
      const updatedIndex = state.findIndex(cls => cls.id === action.payload.id);
      if (updatedIndex !== -1) {
        state[updatedIndex] = action.payload;
      }
    }, // Actualizar detalles de una clase en el horario
    getSubjects: (state) => state, // Obtener todas las clases del horario
    clearSubjects: () => [], // Limpiar todo el horario,
    printSubjects: (state) => { console.log(state) }
  },
});

export const { setSubjects, addSubject, getSubjects, removeSubject, updateSubject, clearSubjects, printSubjects} = subjectsSlice.actions;
export default subjectsSlice.reducer;
