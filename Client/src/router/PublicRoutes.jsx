import { Route, Routes } from 'react-router-dom'
import App from '../App'
import { Cartas } from '../Cartas/Cartas'
import { Ofertadetalle } from '../Oferta/Ofertadetalle'
import Home from '../pages/Home'
import { Perfil } from '../Perfil/Perfil'

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ofertas' element={<Cartas />} />
      <Route path='/perfil/:id' element={<Perfil />} />
      <Route path='/ofertadetallada/:id' element={<Ofertadetalle />} />
      {/* <Route path='/' element={<Perfil />} /> */}
      <Route path='*' element={<Home />} />
    </Routes>
  )
}
