import { createSlice } from '@reduxjs/toolkit'

export const trabajoSlice = createSlice({
  name: 'trabajo',
  initialState: {
    isSaving: false,
    trabajos: [],
    trabajoActive: null,
  },
  reducers: {
    loadAllTrabajos: (state, action) => {
      state.trabajos = action.payload
    },
    setActivo: (state, action) => {
      state.trabajoActive = state.trabajos.filter((trabajo) => trabajo.id === action.payload.id)
    },
  },
})

export const { loadAllTrabajos, setActivo } = trabajoSlice.actions
