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
  },
})

export const { onCheking, onLogOut, onLogin, onActiveUser } = authSlice.actions
