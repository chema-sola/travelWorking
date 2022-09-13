import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useTrabajos, useAuthStore } from '../hooks'

import { EditDetalle } from './components/EditDetalle'
import { InfoDetalle } from './components/InfoDetalle'
import 'react-quill/dist/quill.snow.css'
import './Ofertadetalle.css'

export const Ofertadetalle = () => {
  const { setActiveTrabajo, trabajoActive, trabajos, isLoading } = useTrabajos()
  const { user } = useAuthStore()
  const { id } = useParams()
  useEffect(() => {
    setActiveTrabajo(id)
  }, [trabajos, isLoading])

  return (
    <Container className='detalles__container'>
      <div className='containerdetalle'>
        {!!trabajoActive ? <InfoDetalle trabajoActive={trabajoActive[0]} user={user} /> : <p>Loading...</p>}
      </div>
    </Container>
  )
}
