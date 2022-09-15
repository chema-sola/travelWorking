import { IoTrashOutline } from 'react-icons/io5'
import { IoMdPerson } from 'react-icons/io'
import { AiOutlineEdit, AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useAuthStore, useSubstring } from '../../hooks'

import './candidatura.css'

export const Ofertas = ({ oferta }) => {
  const { startDeletingOneTrabajoMio } = useAuthStore()
  const { residencia, titulo, id, TrabajosClientes: trabajosCliente } = oferta

  const newTitulo = useSubstring(titulo, 30)

  const handleDeleteOneTrabajo = () => {
    startDeletingOneTrabajoMio(id)
  }

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
            <p className='candidatura__time'>Numero de personas inscritas: {trabajosCliente.length}</p>
          </div>
        </div>
      </div>
      <div className='candidatura__right'>
        <Link to={`/private/miOferta/view/${id}`} className='product-btn product-cart-btn'>
          <AiOutlineEye height={'2rem'} />
        </Link>
        <Link to={`/private/edit/${id}`} className='product-btn product-update-btn'>
          <AiOutlineEdit height={'2rem'} />
        </Link>
        <button onClick={handleDeleteOneTrabajo} className='product-btn product-delete-btn'>
          <IoTrashOutline height={'2rem'} />
        </button>
      </div>
    </div>
  )
}
