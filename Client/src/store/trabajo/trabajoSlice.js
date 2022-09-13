import { createSlice } from '@reduxjs/toolkit'

export const trabajoSlice = createSlice({
  name: 'trabajo',
  initialState: {
    isSaving: false,
    trabajos: [],
    trabajoActive: null,
    isLoading: true,
  },
  reducers: {
    loadAllTrabajos: (state, action) => {
      state.trabajos = action.payload
      state.isLoading = false
    },
    setActivo: (state, action) => {
      // state.trabajoActive = state.trabajos.filter((trabajo) => trabajo.id === action.payload.id)
      state.trabajoActive = [action.payload]
    },
    setLoading: (state) => {
      state.isLoading = true
    },
  },
})

export const { loadAllTrabajos, setActivo, setLoading } = trabajoSlice.actions
