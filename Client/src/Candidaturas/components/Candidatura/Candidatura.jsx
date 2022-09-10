import { useSubstring } from '../../../hooks'
import { EstadoCandidaturas } from '../EstadoCandidaturas/EstadoCandidaturas'

import './candidatura.css'
export const Candidatura = ({ candidatura }) => {
  const { disponibilidadinicial, disponibilidadfinal, residencia, horasdia, titulo, estado } = candidatura

  const newTitulo = useSubstring(titulo, 30)
  return (
    <div className='candidatura'>
      <div className='candidatura__left'>
        <img
          className='candidatura__img'
          src='https://www.noegasystems.com/wp-content/uploads/zonificacion-almacen-1.jpg'
          alt={titulo}
        />
        <div className='candidatura__text_wapper'>
          <div>
            <h2 className='candidatura__title'>{newTitulo}</h2>
          </div>
          <div>
            <p className='candidatura__country'>{residencia}</p>
          </div>
          <div>
            <p className='candidatura__time'>
              {disponibilidadinicial} - {disponibilidadfinal} - {horasdia}
            </p>
          </div>
        </div>
      </div>
      <div className='candidatura__right'>
        <EstadoCandidaturas status={estado} />
      </div>
    </div>
  )
}
