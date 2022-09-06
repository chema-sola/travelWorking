import { Container } from 'react-bootstrap'

import { Producto } from './Componentes/Card'

import { productos } from '../datos'
import './Cards.css'
import { useSelector } from 'react-redux'

export const Cartas = ({ size }) => {
  const { trabajos } = useSelector((state) => state.trabajos)
  return (
    <Container>
      <div className='products__grid'>
        {trabajos && trabajos.slice(0, size).map(({ id, ...rest }) => <Producto key={id} {...rest} id={id} />)}
      </div>
    </Container>
  )
}
