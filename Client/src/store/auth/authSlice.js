import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', // 'authenticated','not-authenticated','checking'
    user: {},
    activeUser: null,
    misTrabajos: null,
    misTrabajosActive: null,
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
    onAddMisTrabajosActive: (state, { payload }) => {
      state.misTrabajosActive = payload
    },
    onUpdateMisTrabajosActive: (state, { payload }) => {
      state.misTrabajosActive = state.misTrabajosActive.map((miTrabajo) =>
        miTrabajo.TrabajoId === payload.TrabajoId && miTrabajo.ClienteId === payload.ClienteId
          ? { ...miTrabajo, ...payload }
          : miTrabajo
      )

      // console.log(payload[0].ClienteId)
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
  onAddMisTrabajosActive,
  onUpdateMisTrabajosActive,
} = authSlice.actions
