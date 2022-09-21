import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

import './estadoCandidaturas.css'
export const EstadoCandidaturas = ({ estado, startChangeEstado, TrabajoId, ClienteId }) => {
  return (
    <>
      {estado === 'Aceptado' && (
        <span className='status status__accept'>
          <AiOutlineCheck />
          Aceptado
        </span>
      )}

      {estado === 'Denegado' && (
        <span className='status status__denied'>
          <AiOutlineClose />
          Denegado
        </span>
      )}

      {estado === 'Pendiente' && (
        <div
          style={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}
        >
          <button
            onClick={() => startChangeEstado('Aceptado', TrabajoId, ClienteId)}
            className='product-btn product-update-btn'
          >
            <AiOutlineCheck height={'2rem'} />
          </button>
          <button
            onClick={() => startChangeEstado('Denegado', TrabajoId, ClienteId)}
            className='product-btn product-delete-btn'
          >
            <AiOutlineClose height={'2rem'} />
          </button>
        </div>
      )}
    </>
  )
}
