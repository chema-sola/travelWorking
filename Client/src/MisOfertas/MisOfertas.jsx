import { useEffect } from 'react'
import { Container } from 'react-bootstrap'

import { useAuthStore, useTrabajos } from '../hooks'
import { Ofertas } from './Ofertas/Ofertas'

import './candidaturas.css'

export const MisOfertas = () => {
  const { user, startLoadAllMisTrabajos } = useAuthStore()
  const { misTrabajos } = user
  useEffect(() => {
    startLoadAllMisTrabajos(user.id)
  }, [])
  return (
    <Container style={{ marginTop: '3rem', marginBottom: '3rem' }}>
      <h1>Mis ofertas</h1>
      <div className='candidaturas'>
        {misTrabajos && misTrabajos.map((oferta) => <Ofertas key={oferta.id} oferta={oferta} />)}
      </div>
    </Container>
  )
}
