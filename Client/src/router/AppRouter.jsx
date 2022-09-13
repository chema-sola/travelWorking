import { Route, Routes, Navigate } from 'react-router-dom'

import { useAuthStore } from '../hooks'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'
import { NotAuthenticatedRoutes } from './NotAuthenticatedRoutes'
import App from '../App'

export const AppRouter = () => {
  const { status } = useAuthStore()

  if (status === 'checking') {
    return <p>Loading...</p>
  }

  return (
    <Routes>
      {/* <Route path='/' element={<App />}> */}
      {status === 'not-authenticated' && <Route path='/auth/*' element={<NotAuthenticatedRoutes />} />}

      {status === 'authenticated' && <Route path='/private/*' element={<PrivateRoutes />} />}
      <Route path='/*' element={<PublicRoutes />} />

      <Route path='*' element={<Navigate to='/' />} />
      {/* </Route> */}
    </Routes>
  )
}
