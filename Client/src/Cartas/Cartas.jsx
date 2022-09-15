import { Producto } from './Componentes/Card'

import { useSelector } from 'react-redux'

import './cards.css'

export const Cartas = ({ size, buscador = '' }) => {
  const { trabajos } = useSelector((state) => state.trabajos)

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
