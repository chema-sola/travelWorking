import Carousel from 'react-bootstrap/Carousel'

import { Cartas } from '../Cartas/Cartas'

//imagen
import img01 from '../assets/img/img01.webp'
import header01 from '../assets/img/header_frontpage_0.webp'
import header02 from '../assets/img/header_frontpage_2_sm.webp'

import './home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='hero'>
        <Carousel indicators={false} interval={4000} keyboard={false} fade className='hero__header'>
          <Carousel.Item>
            <img className='hero__img' src={img01} alt='First slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='hero__img' src={header01} alt='First slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='hero__img' src={header02} alt='First slide' />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='box__oferta'>
        <h1 className='box__title'> Encuentre tu Anfitrion </h1>
        <Cartas size={4} />

        <div className='box__title'>
          <button to='/ofertas' className='button'>
            <Link className='boton_a' to='/ofertas'>
              Mostras mas
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
