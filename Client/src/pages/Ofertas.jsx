import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { Cartas } from '../Cartas/Cartas'
import { useForm } from '../hooks'

const formData = { buscador: '' }

export const Ofertas = () => {
  // Cuidado con poner un objeto dentro de  un hook, ya que como siempre es diferente
  // siempre se va a renderizar de nuevo el componente
  // Solucion:
  // crear el objeto en una variable fuera del componente
  const [formValues, onChange] = useForm(formData)

  return (
    <Container>
      <Form>
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
      </Form>
      <Cartas buscador={formValues.buscador} />
    </Container>
  )
}
