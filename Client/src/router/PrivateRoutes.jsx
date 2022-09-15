import { Navigate, Route, Routes } from 'react-router-dom'
import { Candidaturas } from '../Candidaturas/Candidaturas'
import { ActualizarOferta } from '../MisOfertas/ActualizarOferta/ActualizarOferta'
import { CreateOferta } from '../MisOfertas/CreateOferta/CreateOferta'
import { MisOfertas } from '../MisOfertas/MisOfertas'
import { EditPerfil } from '../Perfil/MiPerfil/EditPerfil'

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/candidaturas/:id' element={<Candidaturas />} />
      <Route path='/ofertas/:id' element={<MisOfertas />} />
      <Route path='/miOferta/create' element={<CreateOferta />} />
      <Route path='/editMiOferta/:id' element={<ActualizarOferta />} />
      <Route path='/editPerfil/:id' element={<EditPerfil />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
