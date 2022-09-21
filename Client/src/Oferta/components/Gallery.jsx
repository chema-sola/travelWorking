import { memo } from 'react'
import ImageGallery from 'react-image-gallery'
import Imagen from '../../assets/img/1.jpeg'

const images = [
  {
    original: Imagen,
    thumbnail: Imagen,
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

export const Gallery = memo(({ img }) => {
  return <ImageGallery items={[{ original: `/${img}`, thumbnail: `/${img}` }, ...images]} />
})
