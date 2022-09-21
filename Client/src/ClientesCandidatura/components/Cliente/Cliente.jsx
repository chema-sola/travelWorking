import { EstadoCandidaturas } from '../EstadoCandidaturas/EstadoCandidaturas'

import './candidatura.css'
export const Cliente = ({ cliente, startChangeEstado }) => {
  const { estado, Cliente } = cliente
  const { nombre, apellidos, telefono, pais, ciudad, cpostal } = Cliente

  return (
    <div className='candidatura'>
      <div className='candidatura__left'>
        <img
          className='candidatura__img'
          src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
          alt={nombre}
        />
        <div className='candidatura__text_wapper'>
          <div>
            <h2 className='candidatura__title'>
              {nombre} {apellidos}
            </h2>
          </div>
          <div>
            <p className='candidatura__country'>{telefono}</p>
          </div>
          <div>
            <p className='candidatura__time'>
              {pais} - {ciudad} - {cpostal}
            </p>
          </div>
        </div>
      </div>
      <div className='candidatura__right'>
        <EstadoCandidaturas status={estado} {...cliente} startChangeEstado={startChangeEstado} />
      </div>
    </div>
  )
}
