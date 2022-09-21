import { Link } from 'react-router-dom'
import { useSubstring } from '../../hooks'

export const Producto = ({ id, titulo, descripcion, image }) => {
  const newDesc = useSubstring(descripcion, 80)

  return (
    <div className='product'>
      <img
        className='product-img'
        src={
          image
            ? `http://localhost:4000/img/${image}`
            : 'https://www.noegasystems.com/wp-content/uploads/zonificacion-almacen-1.jpg'
        }
        alt='Rome'
      />
      <div className='product-content'>
        <h1 className='product-header'>{titulo}</h1>
        <p className='product-text'>{newDesc}</p>
        <div className='button-box'>
          <Link to={`/ofertadetallada/${id}`} className='product-btn product-cart-btn'>
            Explora
          </Link>
        </div>
      </div>
    </div>
  )
}
