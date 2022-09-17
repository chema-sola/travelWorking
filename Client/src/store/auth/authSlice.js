import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', // 'authenticated','not-authenticated','checking'
    user: {},
    activeUser: null,
  },
  reducers: {
    onCheking: (state) => {
      state.status = 'checking'
      state.user = {}
    },
    onLogin: (state, { payload }) => {
      state.status = 'authenticated'
      state.user = payload
    },
    onLogOut: (state) => {
      state.status = 'not-authenticated'
      state.user = {}
    },
    onActiveUser: (state, { payload }) => {
      state.activeUser = payload
    },
    onUpdateUser: (state, { payload }) => {
      // state.activeUser = { ...state.activeUser, ...payload }
      state.user = { ...state.user, ...payload }
    },
    onLoadMisTrabajos: (state, { payload }) => {
      state.user.misTrabajos = payload
    },
    onAddMisInscripciones: (state, { payload }) => {
      state.user.candidaturas = [...state.user.candidaturas, { ...payload, estado: 'Pendiente' }]
    },
    deleteOneTrabajoMio: (state, { payload }) => {
      state.user.misTrabajos = state.user.misTrabajos.filter((trabajo) => trabajo.id !== payload)
    },
  },
})

export const {
  onCheking,
  onLogOut,
  onLogin,
  onActiveUser,
  onLoadMisTrabajos,
  onUpdateUser,
  deleteOneTrabajoMio,
  onAddMisInscripciones,
} = authSlice.actions
