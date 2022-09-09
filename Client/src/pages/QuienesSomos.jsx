import './quienesSomos.css'
import Nosotros1 from '../assets/img/img09.jpg'
import { Container } from 'react-bootstrap'

function QuienesSomos() {
  console.log(Nosotros1)
  return (
    <>
      <Container>
        <div className='box-aboutme'>
          <div>
            <p>¡Tenemos una misión y queremos hacer las cosas de manera diferente!</p>
            <p>
              Construir una comunidad compartida de viajeros globales que realmente quieran ver el mundo mientras
              contribuyen y retribuyen a los lugares que visitan. Junto a nuestros acogedores anfitriones, listos para
              recibir visitantes que puedan ayudar.
            </p>
            <p>
              Con miles y miles de usuarios y millones de páginas vistas cada mes, pensamos que era hora de escribir
              otra actualización sobre Workaway de dónde venimos y hacia dónde vamos...
            </p>
            <p>
              En primer lugar, muchas gracias a todos los que han hecho posible el éxito de Workaway. Además de nuestro
              equipo actual, también queremos agradecer a los miles de miembros que han usado Workaway para conectarse y
              difundir el mensaje a escala mundial.
            </p>
            <p>¿Sabías que hemos crecido completamente de forma orgánica y NUNCA publicitamos activamente?</p>
            <p>
              Workaway ha crecido gracias al boca a boca, lo que nos inspira a seguir adelante, sabiendo que ofrecemos
              un servicio que está causando sensación en la comunidad mundial de viajes.
            </p>
          </div>
          <img className='about__img' src={Nosotros1} alt='' />
        </div>
      </Container>

      <Container>
        <div className="box-aboute">
          <div>
         <p> Siempre nos asombraba que la gente pagara miles de dólares a empresas o agentes para ser voluntarios o 
          trabajar en un país diferente. A menudo, estas empresas cobran por "organizar" una estadía o un trabajo de 
          voluntariado mientras se quedan con una gran parte de las ganancias y pagan por su publicidad mientras dan 
          un porcentaje muy pequeño al lugar real que lo necesita. Creemos que hemos logrado grandes avances en la disrupción 
          de esta industria. Sabemos que con las herramientas adecuadas y con el poder de Internet, las personas son perfectamente 
          capaces de organizar su propia estadía, realizar sus propios controles y organizar su propio seguro y transporte, 
          no solo brindando la flexibilidad que necesitan, sino también ahorrando sustancialmente a sus presupuesto de viaje </p>
          <p>¡Creemos que obtienes de la vida lo que estás dispuesto a poner en ella!</p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default QuienesSomos
