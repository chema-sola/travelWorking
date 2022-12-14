import { Link } from 'react-router-dom'

import { useAuthStore, useSubstring, useTrabajos } from '../../hooks'

import { IoTrashOutline } from 'react-icons/io5'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'

import './candidatura.css'

export const Ofertas = ({ oferta }) => {
  const { startDeletingOneTrabajoMio } = useAuthStore()
  const { startDeleteTrabajo } = useTrabajos()
  const { residencia, titulo, id, TrabajosClientes: trabajosCliente, image } = oferta

  const newTitulo = useSubstring(titulo, 30)

  const handleDeleteOneTrabajo = () => {
    startDeletingOneTrabajoMio(id)
    startDeleteTrabajo(id)
  }

  return (
    <div className='candidatura'>
      <div className='candidatura__left'>
        <img
          className='candidatura__img'
          src={
            image
              ? `http://localhost:4000/img/${image}`
              : 'https://www.noegasystems.com/wp-content/uploads/zonificacion-almacen-1.jpg'
          }
          alt={titulo}
        />
        <div className='candidatura__text_wapper'>
          <div>
            <Link to={`/ofertadetallada/${id}`} className='candidatura__title'>
              {newTitulo}
            </Link>
          </div>
          <div>
            <p className='candidatura__country'>{residencia}</p>
          </div>
          <div>
            <p className='candidatura__time'>Numero de personas inscritas: {trabajosCliente.length}</p>
          </div>
        </div>
      </div>
      <div className='candidatura__right'>
        <Link to={`/private/miOferta/${id}/clientes`} className='product-btn product-cart-btn'>
          <BsPerson height={'2rem'} />
        </Link>
        <Link to={`/private/editMiOferta/${id}`} className='product-btn product-update-btn'>
          <AiOutlineEdit height={'2rem'} />
        </Link>
        <button onClick={handleDeleteOneTrabajo} className='product-btn product-delete-btn'>
          <IoTrashOutline height={'2rem'} />
        </button>
      </div>
    </div>
  )
}
