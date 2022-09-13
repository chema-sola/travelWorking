import { useEffect } from 'react'
import { Container } from 'react-bootstrap'

import { AiOutlinePlus } from 'react-icons/ai'

import { Ofertas } from './Ofertas/Ofertas'
import { useAuthStore, useTrabajos } from '../hooks'

import { Link } from 'react-router-dom'
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
      <Link
        className='product-btn product-cart-btn'
        style={{ height: '50px', width: '50px' }}
        to={`/private/miOferta/create`}
      >
        <AiOutlinePlus />
      </Link>
      <div className='candidaturas'>
        {misTrabajos && misTrabajos.map((oferta) => <Ofertas key={oferta.id} oferta={oferta} />)}
      </div>
    </Container>
  )
}
