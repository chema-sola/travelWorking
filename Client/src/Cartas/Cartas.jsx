import { Container } from 'react-bootstrap'

import { Producto } from './Componentes/Card'

import { productos } from '../datos'
import './Cards.css'

export const Cartas = () => {
  return (
    <Container>
      <div className='products__grid'>
        {productos && productos.map(({ id, ...rest }) => <Producto key={id} {...rest} id={id} />)}
      </div>
    </Container>
  )
}
