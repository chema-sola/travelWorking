export const Producto = ({ id, nombre, descripcion, precio }) => {
  return (
    <div className='product'>
      <img
        className='product-img'
        src='https://www.noegasystems.com/wp-content/uploads/zonificacion-almacen-1.jpg'
        alt='Rome'
      />
      <div className='product-content'>
        <h1 className='product-header'>{nombre}</h1>
        <p className='product-text'>{descripcion}</p>
        <p className='product-price'>{precio} €</p>
        <div className='button-box'>
          <button className='product-btn product-cart-btn'>Boton</button>
        </div>
      </div>
    </div>
  )
}
