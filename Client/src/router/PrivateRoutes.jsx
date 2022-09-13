import { Route, Routes } from 'react-router-dom'
import { Candidaturas } from '../Candidaturas/Candidaturas'

export const PrivateRoutes = () => {
  console.log('fghjk')
  return (
    <Routes>
      <Route path='/candidaturas/:id' element={<Candidaturas />} />
    </Routes>
  )
}
