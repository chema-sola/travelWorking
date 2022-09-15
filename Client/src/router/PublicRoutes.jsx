import { Navigate, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import { Ofertas } from '../pages/Ofertas'
import { Ofertadetalle } from '../Oferta/Ofertadetalle'
import { Perfil } from '../Perfil/Perfil'

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ofertas' element={<Ofertas />} />
      <Route path='/perfil/:id' element={<Perfil />} />
      <Route path='/ofertadetallada/:id' element={<Ofertadetalle />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
