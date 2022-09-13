import { Navigate, Route, Routes } from 'react-router-dom'
import Formulario from '../pages/Formulario'
import Login from '../pages/Login'

export const NotAuthenticatedRoutes = () => {
  console.log('fghjk')
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Formulario />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
