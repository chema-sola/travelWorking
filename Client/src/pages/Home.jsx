import { Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

import img01 from '../assets/img/img01.webp'
import header01 from '../assets/img/header_frontpage_0.webp'
import header02 from '../assets/img/header_frontpage_2_sm.webp'

import './home.css'
/**
 * 
 * @returns gthujiolpokih
 */
function Home() {
  return (
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
    // <div className='hero'>
    //   <div id='carouselExampleSlidesOnly' className='carousel slide' data-ride='carousel'>
    //     <div className='carousel-inner hero__header'>
    //       <div className='carousel-item active'>
    //         <img className='hero__img' src={img01} alt='First slide' />
    //       </div>
    //       <div className='carousel-item'>
    //         <img className='hero__img' src={header01} alt='Second slide' />
    //       </div>
    //       <div className='carousel-item'>
    //         <img className='hero__img' src={header02} alt='Third slide' />
    //       </div>
    //     </div>
    //   </div>
    //   <Button className='hero__btn'>Change size</Button>
    // </div>
  )
}

export default Home
