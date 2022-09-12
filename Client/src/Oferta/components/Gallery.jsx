import { useState } from 'react'
import ImageGallery from 'react-image-gallery'
// import Lightbox from 'react-image-lightbox'
import Imagen from '../../assets/img/1.jpeg'
// const images = [
//   Imagen,
//   '//upload.wikimedia.org/wikipedia/commons/c/c5/Finca_SierraMorena.jpg',
//   '//www.noegasystems.com/wp-content/uploads/zonificacion-almacen-1.jpg',
//   '//i.blogs.es/c68014/casa-3d/840_560.jpeg',
//   '//www.rocketlawyer.com/es/es/blog/wp-content/uploads/sites/12/2017/07/foto-arrendamiento-obra.jpg',
// ]

const images = [
  {
    original: Imagen,
    thumbnail: Imagen,
  },
  {
    original: Imagen,
    thumbnail: Imagen,
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

export const Gallery = () => {
  // const [photo, setPhoto] = useState({
  //   photoIndex: 0,
  //   isOpen: false,
  // })

  // const { isOpen, photoIndex } = photo
  return (
    // <div>
    //   <div onClick={console.log(photo.photoIndex)} className='detalles__image_galery'>
    //     <img
    //       onClick={() => setPhoto({ photoIndex: 0, isOpen: false })}
    //       className='visorimagen'
    //       src={Imagen}
    //       alt='Granja'
    //     />
    //     <img
    //       onClick={() => setPhoto({ photoIndex: 1, isOpen: false })}
    //       className='visorimagen'
    //       src='https://upload.wikimedia.org/wikipedia/commons/c/c5/Finca_SierraMorena.jpg'
    //       alt='Granja'
    //     />
    //     <img
    //       onClick={() => setPhoto({ photoIndex: 2, isOpen: false })}
    //       className='visorimagen'
    //       src='https://www.noegasystems.com/wp-content/uploads/zonificacion-almacen-1.jpg'
    //       alt='Almacen'
    //     />
    //     <img
    //       onClick={() => setPhoto({ photoIndex: 3, isOpen: false })}
    //       className='visorimagen'
    //       src='https://i.blogs.es/c68014/casa-3d/840_560.jpeg'
    //       alt='Casa'
    //     />
    //     <img
    //       onClick={() => setPhoto({ photoIndex: 4, isOpen: false })}
    //       className='visorimagen'
    //       src='https://www.rocketlawyer.com/es/es/blog/wp-content/uploads/sites/12/2017/07/foto-arrendamiento-obra.jpg'
    //       alt='Granja'
    //     />
    //   </div>
    <ImageGallery items={images} showFullscreenButton={false} fullscreen={false} useBrowserFullscreen={false} />
    // </div>
  )
}
