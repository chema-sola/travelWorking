import { Producto } from './Componentes/Card'

import { useSelector } from 'react-redux'

import './cards.css'
import { useTrabajos } from '../hooks'

export const Cartas = ({ size, buscador = '' }) => {
  const { trabajos } = useTrabajos()

  return (
    <div className='products__grid'>
      {trabajos &&
        trabajos
          .filter((trabajo) => trabajo.titulo.toLowerCase().includes(buscador.toLowerCase()))
          .slice(0, size)
          .map(({ id, ...rest }) => <Producto key={id} {...rest} id={id} />)}
    </div>
  )
}
