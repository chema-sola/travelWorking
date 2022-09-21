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
    addNewJob: (state, { payload }) => {
      state.trabajos = [...state.trabajos, payload]
      state.isLoading = false
    },
    setActivo: (state, action) => {
      // state.trabajoActive = state.trabajos.filter((trabajo) => trabajo.id === action.payload.id)
      state.trabajoActive = [action.payload]
      state.isLoading = false
    },
    setSyncActivo: (state, { payload }) => {
      state.trabajoActive = state.trabajos.filter((trabajo) => trabajo.id === payload)
      state.isLoading = false
    },
    setUpdateTrabajo: (state, { payload }) => {
      state.trabajos = state.trabajos.map((trabajo) =>
        trabajo.id === payload.id ? { ...trabajo, ...payload } : trabajo
      )
      state.isLoading = false
    },
    onDeleteTrabajo: (state, { payload }) => {
      // state.trabajoActive = state.trabajos.filter((trabajo) => trabajo.id === action.payload.id)
      state.trabajos = state.trabajos.filter((trabajo) => trabajo.id !== payload)
    },
    setLoading: (state) => {
      state.isLoading = true
    },
    setFinishLoading: (state) => {
      state.isLoading = false
    },
  },
})

export const {
  loadAllTrabajos,
  setActivo,
  setLoading,
  addNewJob,
  setFinishLoading,
  setUpdateTrabajo,
  setSyncActivo,
  onDeleteTrabajo,
} = trabajoSlice.actions
