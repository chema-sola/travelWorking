import { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import Imagen from '../../assets/img/1.jpeg'
const images = [
  Imagen,
  '//upload.wikimedia.org/wikipedia/commons/c/c5/Finca_SierraMorena.jpg',
  '//www.noegasystems.com/wp-content/uploads/zonificacion-almacen-1.jpg',
  '//i.blogs.es/c68014/casa-3d/840_560.jpeg',
  '//www.rocketlawyer.com/es/es/blog/wp-content/uploads/sites/12/2017/07/foto-arrendamiento-obra.jpg',
]

export const Gallery = () => {
  const [photo, setPhoto] = useState({
    photoIndex: 0,
    isOpen: false,
  })

  const { isOpen, photoIndex } = photo
  return (
    <div>
      <div onClick={console.log(photo.photoIndex)} className='detalles__image_galery'>
        <img
          onClick={() => setPhoto({ photoIndex: 0, isOpen: false })}
          className='visorimagen'
          src={Imagen}
          alt='Granja'
        />
        <img
          onClick={() => setPhoto({ photoIndex: 1, isOpen: false })}
          className='visorimagen'
          src='https://upload.wikimedia.org/wikipedia/commons/c/c5/Finca_SierraMorena.jpg'
          alt='Granja'
        />
        <img
          onClick={() => setPhoto({ photoIndex: 2, isOpen: false })}
          className='visorimagen'
          src='https://www.noegasystems.com/wp-content/uploads/zonificacion-almacen-1.jpg'
          alt='Almacen'
        />
        <img
          onClick={() => setPhoto({ photoIndex: 3, isOpen: false })}
          className='visorimagen'
          src='https://i.blogs.es/c68014/casa-3d/840_560.jpeg'
          alt='Casa'
        />
        <img
          onClick={() => setPhoto({ photoIndex: 4, isOpen: false })}
          className='visorimagen'
          src='https://www.rocketlawyer.com/es/es/blog/wp-content/uploads/sites/12/2017/07/foto-arrendamiento-obra.jpg'
          alt='Granja'
        />
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setPhoto((prev) => ({ ...prev, isOpen: false }))}
          onMovePrevRequest={() =>
            setPhoto((prev) => ({ ...prev, photoIndex: (photoIndex + images.length - 1) % images.length }))
          }
          onImageLoad={() => {
            window.dispatchEvent(new Event('resize'))
          }}
          onMoveNextRequest={() => setPhoto((prev) => ({ ...prev, photoIndex: (photoIndex + 1) % images.length }))}
        />
      )}
    </div>
  )
}
