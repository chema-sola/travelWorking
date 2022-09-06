import { configureStore } from '@reduxjs/toolkit'
import { trabajoSlice } from './trabajo/trabajoSlice'

export const store = configureStore({
  reducer: {
    trabajos: trabajoSlice.reducer,
  },
})
