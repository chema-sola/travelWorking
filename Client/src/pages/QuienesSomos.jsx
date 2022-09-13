import './quienesSomos.css'
import Nosotros1 from '../assets/img/img09.jpg'
import { Container } from 'react-bootstrap'
import Nosotros2 from '../assets/img/img10.jpg'
import Nosotros3 from '../assets/img/img11.jpg'
import Nosotros4 from '../assets/img/img12.jpg'

function QuienesSomos() {
  console.log(Nosotros1)
  return (
    <>
      <br />
      <div className="title"><h1>Sobre Nosotros</h1></div>
      <Container>
        <div className='box-aboutme'>
          <div className='aboutme__text'>
            <p>¡Tenemos una misión y queremos hacer las cosas de manera diferente!</p>
            <p>
              Construir una comunidad compartida de viajeros globales que realmente quieran ver el mundo mientras
              contribuyen y retribuyen a los lugares que visitan. Junto a nuestros acogedores anfitriones, listos para
              recibir visitantes que puedan ayudar.
            </p>
            <p>
              Con miles y miles de usuarios y millones de páginas vistas cada mes, pensamos que era hora de escribir
              otra actualización sobre TravelWorking de dónde venimos y hacia dónde vamos...
            </p>
            <p>
              En primer lugar, muchas gracias a todos los que han hecho posible el éxito de TravelWorking. Además de
              nuestro equipo actual, también queremos agradecer a los miles de miembros que han usado TravelWorking para
              conectarse y difundir el mensaje a escala mundial.
            </p>
            <p>¿Sabías que hemos crecido completamente de forma orgánica y NUNCA publicitamos activamente?</p>
            <p>
              TravelWorking ha crecido gracias al boca a boca, lo que nos inspira a seguir adelante, sabiendo que
              ofrecemos un servicio que está causando sensación en la comunidad mundial de viajes.
            </p>
          </div>
          <div className='aboutme__img'>
            <img className='about__img1' src={Nosotros4} alt='' />
          </div>
        </div>
      </Container>
      <br />

      <Container>
        <div className='box-aboutme2'> 
        <img className='about__img2' src={Nosotros3} alt='' />
          <div className='aboutme__text'>
            <p>
              Siempre nos asombraba que la gente pagara miles de dólares a empresas o agentes para ser voluntarios o
              trabajar en un país diferente. A menudo, estas empresas cobran por "organizar" una estadía o un trabajo de
              voluntariado mientras se quedan con una gran parte de las ganancias y pagan por su publicidad mientras dan
              un porcentaje muy pequeño al lugar real que lo necesita. Creemos que hemos logrado grandes avances en la
              disrupción de esta industria. Sabemos que con las herramientas adecuadas y con el poder de Internet, las
              personas son perfectamente capaces de organizar su propia estadía, realizar sus propios controles y
              organizar su propio seguro y transporte, no solo brindando la flexibilidad que necesitan, sino también
              ahorrando sustancialmente a sus presupuesto de viaje{' '}
            </p>
            <p>¡Creemos que obtienes de la vida lo que estás dispuesto a poner en ella!</p>
          </div>
        </div>
      </Container>
      <br />
    </>
  )
}

export default QuienesSomos
