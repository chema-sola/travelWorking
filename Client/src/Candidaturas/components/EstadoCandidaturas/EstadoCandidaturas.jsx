import { GiSandsOfTime } from 'react-icons/gi'
import { AiOutlineStop, AiOutlineCheck } from 'react-icons/ai'

import './estadoCandidaturas.css'
export const EstadoCandidaturas = ({ status }) => {
  console.log(status)
  return (
    <>
      {status === 'Aceptado' && (
        <span className='status status__accept'>
          <AiOutlineCheck />
          Aceptado
        </span>
      )}

      {status === 'Denegado' && (
        <span className='status status__denied'>
          <AiOutlineStop />
          Denegado
        </span>
      )}

      {status === 'Pendiente' && (
        <span className='status status__pending'>
          <GiSandsOfTime /> Pendiente
        </span>
      )}
    </>
  )
}
