import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import { useAuthStore } from '../hooks'

import { Cliente } from './components/Cliente/Cliente'

import './candidaturas.css'

export const ClientesCandidatura = () => {
  const { misTrabajosActive, startGetClientesMisTrabajos, startChangeEstado } = useAuthStore()
  const { id } = useParams()

  useEffect(() => {
    startGetClientesMisTrabajos(id)
  }, [id])

  return (
    <Container style={{ marginTop: '3rem', marginBottom: '3rem' }}>
      <h1>Clientes en la oferta: </h1>
      <div className='candidaturas'>
        {misTrabajosActive !== null ? (
          misTrabajosActive.map((cliente) => (
            <Cliente key={cliente.ClienteId} cliente={cliente} startChangeEstado={startChangeEstado} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Container>
  )
}
