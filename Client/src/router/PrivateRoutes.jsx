import { Route, Routes } from 'react-router-dom'
import { Candidaturas } from '../Candidaturas/Candidaturas'
import { MisOfertas } from '../MisOfertas/MisOfertas'

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/candidaturas/:id' element={<Candidaturas />} />
      <Route path='/ofertas/:id' element={<MisOfertas />} />
    </Routes>
  )
}
