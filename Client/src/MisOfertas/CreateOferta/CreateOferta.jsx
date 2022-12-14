import { useState } from 'react'
import ReactQuill from 'react-quill'

import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'

import { useAuthStore, useForm, useTrabajos } from '../../hooks'

import 'react-quill/dist/quill.snow.css'
import { ImageUpload } from '../Components/ImageUpload'

const formDatos = {
  disponibilidadinicial: '',
  disponibilidadfinal: '',
  descripcion: '',
  ayuda: '',
  residencia: '',
  viajerosMinimo: '',
  horasdia: '',
  titulo: '',
}

export const CreateOferta = () => {
  const { startCreateNewTrabajo } = useTrabajos()
  const { user } = useAuthStore()
  const [formValues, onChange] = useForm(formDatos)
  const [idioma, setIdioma] = useState('')
  const [otros, setOtros] = useState('')
  const [image, setImage] = useState(null)

  const {
    disponibilidadinicial,
    disponibilidadfinal,
    descripcion,
    ayuda,
    residencia,
    viajerosMinimo,
    horasdia,
    titulo,
    alojamiento,
  } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData()
    const datos = { ...formValues, idioma, otros, ClienteId: Number(user.id) }
    delete datos.image

    data.append('datos', JSON.stringify(datos))
    data.append('file', image)

    startCreateNewTrabajo(data)
  }
  return (
    <Container>
      <h1>Crear oferta: </h1>
      <Form onSubmit={handleSubmit} encType='multipart/form-data'>
        <Row style={{ border: 'none' }}>
          <Col>
            <Form.Group className='mb-3'>
              <FloatingLabel label='Titulo'>
                <Form.Control type='text' name='titulo' onChange={onChange} value={titulo} placeholder='Título' />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <ImageUpload useFoto={[image, setImage]} />
          </Col>
        </Row>
        <Row style={{ border: 'none' }}>
          <Col>
            <Form.Group className='mb-3'>
              <FloatingLabel label='Fecha inicio'>
                <Form.Control
                  type='text'
                  name='disponibilidadinicial'
                  value={disponibilidadinicial}
                  onChange={onChange}
                  placeholder='Fecha de inicio'
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3'>
              <FloatingLabel label='Fecha final'>
                <Form.Control
                  type='text'
                  name='disponibilidadfinal'
                  onChange={onChange}
                  value={disponibilidadfinal}
                  placeholder='Fecha final'
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>

        <Row style={{ border: 'none' }}>
          <Col>
            <Form.Group className='mb-3'>
              <FloatingLabel label='Residencia'>
                <Form.Control
                  type='text'
                  name='residencia'
                  onChange={onChange}
                  value={residencia}
                  placeholder='Residencia'
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3'>
              <FloatingLabel label='Viajeros Minimos para el viaje'>
                <Form.Control
                  type='text'
                  name='viajerosMinimo'
                  onChange={onChange}
                  value={viajerosMinimo}
                  placeholder='Viajeros Minimos para el viaje'
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3'>
              <FloatingLabel label='Horas de traabajos al dia'>
                <Form.Control
                  type='text'
                  name='horasdia'
                  onChange={onChange}
                  value={horasdia}
                  placeholder='Viajeros Minimos para el viaje'
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
        <FloatingLabel label='Alojamiento'>
          <Form.Control
            as='textarea'
            name='alojamiento'
            placeholder='Alojamiento'
            style={{ height: '100px' }}
            className='mb-3'
            value={alojamiento}
            onChange={onChange}
          />
        </FloatingLabel>
        <FloatingLabel label='Descripcion'>
          <Form.Control
            as='textarea'
            name='descripcion'
            placeholder='Descripcion'
            style={{ height: '100px' }}
            className='mb-3'
            value={descripcion}
            onChange={onChange}
          />
        </FloatingLabel>

        <FloatingLabel label='En que nos ayudarás'>
          <Form.Control
            as='textarea'
            name='ayuda'
            onChange={onChange}
            value={ayuda}
            placeholder='Ayuda'
            style={{ height: '100px' }}
            className='mb-3'
          />
        </FloatingLabel>
        <Form.Label>Idioma</Form.Label>
        <ReactQuill theme='snow' className='mb-3' onChange={setIdioma} value={idioma} />

        <Form.Label>Otros</Form.Label>
        <ReactQuill theme='snow' className='mb-3' onChange={setOtros} value={otros} />
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  )
}
