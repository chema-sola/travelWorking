import { Button } from 'react-bootstrap'
import img01 from '../assets/img/img01.webp'
import header01 from '../assets/img/header_frontpage_0.webp'
import header02 from '../assets/img/header_frontpage_2_sm.webp'

import './home.css'

function Home() {
  return (
    <div className='hero'>
      <div id='carouselExampleSlidesOnly' className='carousel slide' data-ride='carousel'>
        <div className='carousel-inner hero__header'>
          <div className='carousel-item active'>
            <img className='hero__img' src={img01} alt='First slide' />
          </div>
          <div className='carousel-item'>
            <img className='hero__img' src={header01} alt='Second slide' />
          </div>
          <div className='carousel-item'>
            <img className='hero__img' src={header02} alt='Third slide' />
          </div>
        </div>
      </div>

      <Button className='hero__btn'>Change size</Button>

      {/* <div id='carouselExampleSlidesOnly' className='carousel slide' data-ride='carousel'>
          <div className='carousel-inner hero__header'>
            <div className='carousel-item active'>
              
              <img className='hero__img' src={img01} alt='First slide' />
            </div>
            <div className='carousel-item'>
              <img className='hero__img' src={header01} alt='Second slide' />
            </div>
            <div className='carousel-item'>
              <img className='hero__img' src={header02} alt='Third slide' />
            </div>
            <h1 className='display-3'>Hello, world!</h1>
            <p>
              This is a template for a simple marketing or informational website. It includes a large callout called a
              jumbotron and three supporting pieces of content. Use it as a starting point to create something more
              unique.
            </p>
            <p>
              <a className='btn btn-primary btn-lg' href='#' role='button'>
                Learn more »
              </a>
            </p>
        </div> 
      </div>*/}

      {/* 
      <div id='carouselExampleSlidesOnly' className='carousel slide' data-ride='carousel'>
        <div className='carousel-inner hero__header'>
          <div className='carousel-item active'>
            <img className='hero__img' src={img01} alt='First slide' />
          </div>
          <div className='carousel-item'>
            <img className='hero__img' src={header01} alt='Second slide' />
          </div>
          <div className='carousel-item'>
            <img className='hero__img' src={header02} alt='Third slide' />
          </div>
        </div>
      </div>
      <Button className='hero__btn'>Change size</Button>
      Hola */}

      <div class='container'>
        <div class='row'>
          <div class='col-md-4'>
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.
              Donec sed odio dui.{' '}
            </p>
            <p>
              <a class='btn btn-secondary' href='#' role='button'>
                View details »
              </a>
            </p>
          </div>
          <div class='col-md-4'>
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.
              Donec sed odio dui.{' '}
            </p>
            <p>
              <a class='btn btn-secondary' href='#' role='button'>
                View details »
              </a>
            </p>
          </div>
          <div class='col-md-4'>
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula
              porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.
            </p>
            <p>
              <a class='btn btn-secondary' href='#' role='button'>
                View details »
              </a>
            </p>
          </div>
        </div>

        <hr />

        <div class='row mb-2'>
          <div class='col-md-6'>
            <div class='card flex-md-row mb-4 box-shadow h-md-250'>
              <div class='card-body d-flex flex-column align-items-start'>
                <strong class='d-inline-block mb-2 text-primary'>World</strong>
                <h3 class='mb-0'>
                  <a class='text-dark' href='#'>
                    Featured post
                  </a>
                </h3>
                <div class='mb-1 text-muted'>Nov 12</div>
                <p class='card-text mb-auto'>
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </p>
                <a href='#'>Continue reading</a>
              </div>
            </div>
          </div>
          <div class='col-md-6'>
            <div class='card flex-md-row mb-4 box-shadow h-md-250'>
              <div class='card-body d-flex flex-column align-items-start'>
                <strong class='d-inline-block mb-2 text-success'>Design</strong>
                <h3 class='mb-0'>
                  <a class='text-dark' href='#'>
                    Post title
                  </a>
                </h3>
                <div class='mb-1 text-muted'>Nov 11</div>
                <p class='card-text mb-auto'>
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </p>
                <a href='#'>Continue reading</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
