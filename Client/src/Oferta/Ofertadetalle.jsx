import { Container } from 'react-bootstrap'
import { BiClipboard } from 'react-icons/bi'
import { FaHandsHelping, FaChild, FaHandHoldingHeart, FaComments, FaHouseUser, FaBed, FaClock } from 'react-icons/fa'
import { IoIosSchool } from 'react-icons/io'
import { Gallery } from './components/gallery'

import './Ofertadetalle.css'

function Ofertadetalle() {
  return (
    <Container className='detalles__container'>
      <div className='containerdetalle'>
        <h2>Mozo de almacén</h2>
        <div className='detalles__initialtext'>
          <ul>
            <li>Madrid, España</li>
            <li>Publicada el 7 de setiembre</li>
            <li>Experiencia mínima: no requerida</li>
            <li>Durabilidad: 3 meses</li>
          </ul>
          <button className='button'>Inscribirme</button>
        </div>

        <div className='detalles__texto'>
          <div className='detalles__titulo'>
            <BiClipboard />
            <h4>Descripción</h4>
          </div>
          <p>
            Hola, Bienvenidos a Japón ya nuestra casa. Daisuke es de Japón y Hila es de Israel. En primer lugar, gracias
            por leer nuestra página y le deseamos un gran momento en Japón.
            -------------------------------------------------- ---------- 27.4.2020 desafortunadamente Todo está
            cancelado debido al coronavirus. así que no podemos hospedar a nadie, así que por favor no nos escribas en
            este momento. mantente a salvo y los mejores deseos Dai y Hila (solo para noviembre podemos aceptar
            voluntarios) --------------------------------- ----------------------------------------- Vivimos en un
            pueblo granjero japonés tradicional. ambos hablamos inglés. Vivimos entre Tokio y Kioto rodeados de
            montañas, bosques de bambú, ríos y campos de té verde. Vivimos en una casa que renovamos de fábrica de té
            verde a un hogar agradable y tenemos una habitación adicional para trabajar. a nuestro alrededor tenemos
            bosques de bambú que cultivamos. por favor lea bien nuestro perfil antes de escribirnos, muchas gracias.
          </p>
        </div>
        <div className='detalles__texto'>
          <div className='detalles__titulo'>
            <FaHandsHelping />
            <h4>Tipos de ayuda y oportunidad de aprendizaje</h4>
          </div>
          <p>Farmstay help Ayuda en la casa</p>
        </div>
        <div className='detalles__texto'>
          <div className='detalles__titulo'>
            <IoIosSchool />
            <h4>Retos culturales</h4>
          </div>
          <p>Farmstay help Help around the house</p>
        </div>
        <div className='detalles__texto'>
          <div className='detalles__titulo'>
            <FaChild />
            <h4>Proyectos con niños</h4>
          </div>
          <p>Este proyecto permite niños</p>
        </div>
        <div className='detalles__texto'>
          <div className='detalles__titulo'>
            <FaHandHoldingHeart />
            <h4>Ayuda</h4>
          </div>
          <p>
            Tratamos de escribir la descripción de la ayuda lo más clara posible para que sea fácil de entender a qué
            viene. Realmente deseamos que la pase muy bien aquí y que nosotros disfrutemos y hagamos nuestro importante
            trabajo. 1. Cosecha de brotes de bambú: ayuda a cosechar brotes de bambú. al comienzo de la temporada, los
            brotes de bambú se esconden bajo tierra cuando solo sale la parte superior, por lo que puede llevar tiempo
            encontrarlos. Los brotes de bambú pueden pesar desde 300 gr. a 4 kg. todos los días queremos cosechar todo
            lo que podamos. por la mañana nos dirigimos al bosque. luego subimos a la montaña y empezamos a cosechar.
            recolectamos los tiros de bambú en cajas de 20 kg y los entregamos a la fábrica local de agricultores al
            final del día. 2. Bosque de corte y limpieza de bambú - necesitamos ayuda con la limpieza de nuestro bosque
            de bambú. cortaremos bambúes viejos, recogeremos ramitas viejas... y más. tenemos que mover racimos viejos
            de bambú del bosque a otro lugar. 3. Cortar bambú - queremos cortar alrededor de 300 bambúes - alrededor de
            20 bambúes deben cortarse todos los días. las cortamos con sierra manual y con motosierra. después del
            corte, debemos llevar el bambú al lugar de almacenamiento. Luego, cortamos los bambúes de 15 metros en
            secciones de 2,5 metros, lo hacemos con una sierra eléctrica. también limpiaremos el bosque de bambú a
            medida que avanzamos. También usamos máquinas para convertir las ramas en compost. y se los damos a los
            artistas locales. No podemos dañar el bambú, y esto hace que este trabajo también sea suave y sensible.
            Puede ser difícil en el bosque de bambú - no hay camino, a veces tienes que escalar la montaña, el bambú es
            pesado... ¿estás seguro de que estás preparado para esto? También los mosquitos te están esperando allí...
            bzzzzz. ... también es hermoso y tranquilo, pero es importante para nosotros enfatizar la parte desafiante
            ya que este trabajo es muy importante para nosotros y trabajamos con una fecha límite. muchas gracias 4.
            Trabajos de limpieza de la casa: necesitamos ayuda con la limpieza de la casa y la jardinería. nos encanta
            limpiar muy bien y creemos que es un buen trabajo para alguien que disfruta de la limpieza y se preocupa por
            limpiar muy bien. también, a veces, el trabajo está bajo presión de tiempo, y necesitamos limpiar bien y
            rápido, así que esperamos que esté bien para usted. Muchas gracias.
          </p>
        </div>
        <div className='detalles__texto'>
          <div className='detalles__titulo'>
            <FaComments />
            <h4>Idiomas hablados</h4>
          </div>
          <ul>
            <li>Inglés</li>
            <li>Alemán</li>
            <li>Ruso</li>
          </ul>
        </div>
        <div className='detalles__texto'>
          <div className='detalles__titulo'>
            <FaHouseUser />
            <h4>Alojamiento</h4>
          </div>
          <p>
            sala de tatami privada o compartida. Si es una habitación compartida, habrá 2 en la habitación: 2 mujeres o
            2 hombres. viviríamos juntos y es importante para nosotros que estés limpio y ordenado. estamos teniendo un
            pequeño hotel aquí en una casa separada. Así que mientras esté aquí, los huéspedes del hotel también están
            aquí y la privacidad de los huéspedes es muy importante para nosotros. Lamentamos que esto lo haga sentir
            incómodo y esperamos que esté bien para usted. Muchas gracias. sobre las comidas - no cocinamos carne.
            Cocinamos verduras y pescado. Esperamos que esté bien para ti. (no podemos ofrecer comidas veganas). estamos
            encantados de ofrecer sus comidas en sus días de trabajo. en sus días libres le pedimos que se ocupe de su
            alimentación usted mismo. Muchas gracias. Después de contactarnos, nos gustaría hablar por skype.
          </p>
        </div>
        <div className='detalles__texto'>
          <div className='detalles__titulo'>
            <FaBed />
            <h4>Cuantas personas pueden quedarse</h4>
          </div>
          <p>Dos</p>
        </div>
        <div className='detalles__texto'>
          <div className='detalles__titulo'>
            <FaClock />
            <h4>Horario de trabajo</h4>
          </div>
          <p>De lunes a jueves 5 horas diarias, a pactar horario</p>
        </div>
      </div>
      <Gallery />

      {/* <div className='detalles__image_galery'>
        <img
          className='visorimagen'
          src='https://upload.wikimedia.org/wikipedia/commons/c/c5/Finca_SierraMorena.jpg'
          alt='Granja'
        />
        <img
          className='visorimagen'
          src='https://www.noegasystems.com/wp-content/uploads/zonificacion-almacen-1.jpg'
          alt='Almacen'
        />
        <img className='visorimagen' src='https://i.blogs.es/c68014/casa-3d/840_560.jpeg' alt='Casa' />
        <img
          className='visorimagen'
          src='https://www.rocketlawyer.com/es/es/blog/wp-content/uploads/sites/12/2017/07/foto-arrendamiento-obra.jpg'
          alt='Granja'
        />
      </div> */}
    </Container>
  )
}

export default Ofertadetalle
