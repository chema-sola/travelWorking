import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { trabajoSlice } from './trabajo/trabajoSlice'

export const store = configureStore({
  reducer: {
    trabajos: trabajoSlice.reducer,
    auth: authSlice.reducer,
  },
})
