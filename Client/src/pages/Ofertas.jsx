import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { Cartas } from '../Cartas/Cartas'
import { useForm } from '../hooks'

export const Ofertas = () => {
  const [formValues, onChange] = useForm({ buscador: '' })
  return (
    <Container>
      <Form.Group className='mb-3'>
        <Form.Label>Buscar por palabra clave:</Form.Label>
        <Form.Control
          type='text'
          className='cartas__buscador'
          name='buscador'
          onChange={onChange}
          value={formValues.buscador}
        />
      </Form.Group>
      <Cartas buscador={formValues.buscador} />
    </Container>
  )
}
