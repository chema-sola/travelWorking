import { Link, useParams } from 'react-router-dom'

import parse from 'html-react-parser'

import { BiClipboard } from 'react-icons/bi'
import { FaHandsHelping, FaChild, FaHandHoldingHeart, FaComments, FaHouseUser, FaBed, FaClock } from 'react-icons/fa'
import { IoIosSchool } from 'react-icons/io'

import { Gallery } from './gallery'

export const InfoDetalle = ({ trabajoActive, user }) => {
  const { id } = useParams()
  const {
    disponibilidadinicial,
    disponibilidadfinal,
    descripcion,
    ayuda,
    residencia,
    viajerosMinimo,
    horasdia,
    titulo,
    idioma,
    otros,
  } = trabajoActive
  return (
    <>
      <h2>{titulo}</h2>
      <div className='detalles__initialtext'>
        <ul>
          <li>{residencia}</li>
          <li>Experiencia mínima: no requerida</li>
          <li>
            Durabilidad: {disponibilidadinicial} - {disponibilidadfinal}
          </li>
        </ul>
        {user.id === trabajoActive.ClienteId ? (
          <Link className='button' to={`/private/editMiOferta/${id}`}>
            Editar
          </Link>
        ) : (
          <>
            {!user.id ? (
              <Link to='/auth/login' className='button'>
                Inscribirme
              </Link>
            ) : (
              <>
                {user.host === 0 ? (
                  <button className='button'>Inscribirme</button>
                ) : (
                  <button className='disbaled_button' disabled={true} style={{ opacity: 0.6 }}>
                    Inscribirme
                  </button>
                )}
              </>
            )}
          </>
        )}
      </div>

      <div className='detalles__texto'>
        <div className='detalles__titulo'>
          <BiClipboard />
          <h4>Descripción</h4>
        </div>
        <p>{descripcion}</p>
      </div>
      <div className='detalles__texto'>
        <div className='detalles__titulo'>
          <FaHandsHelping />
          <h4>Tipos de ayuda y oportunidad de aprendizaje</h4>
        </div>
        <p>{ayuda}</p>
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
          encontrarlos. Los brotes de bambú pueden pesar desde 300 gr. a 4 kg. todos los días queremos cosechar todo lo
          que podamos. por la mañana nos dirigimos al bosque. luego subimos a la montaña y empezamos a cosechar.
          recolectamos los tiros de bambú en cajas de 20 kg y los entregamos a la fábrica local de agricultores al final
          del día. 2. Bosque de corte y limpieza de bambú - necesitamos ayuda con la limpieza de nuestro bosque de
          bambú. cortaremos bambúes viejos, recogeremos ramitas viejas... y más. tenemos que mover racimos viejos de
          bambú del bosque a otro lugar. 3. Cortar bambú - queremos cortar alrededor de 300 bambúes - alrededor de 20
          bambúes deben cortarse todos los días. las cortamos con sierra manual y con motosierra. después del corte,
          debemos llevar el bambú al lugar de almacenamiento. Luego, cortamos los bambúes de 15 metros en secciones de
          2,5 metros, lo hacemos con una sierra eléctrica. también limpiaremos el bosque de bambú a medida que
          avanzamos. También usamos máquinas para convertir las ramas en compost. y se los damos a los artistas locales.
          No podemos dañar el bambú, y esto hace que este trabajo también sea suave y sensible. Puede ser difícil en el
          bosque de bambú - no hay camino, a veces tienes que escalar la montaña, el bambú es pesado... ¿estás seguro de
          que estás preparado para esto? También los mosquitos te están esperando allí... bzzzzz. ... también es hermoso
          y tranquilo, pero es importante para nosotros enfatizar la parte desafiante ya que este trabajo es muy
          importante para nosotros y trabajamos con una fecha límite. muchas gracias 4. Trabajos de limpieza de la casa:
          necesitamos ayuda con la limpieza de la casa y la jardinería. nos encanta limpiar muy bien y creemos que es un
          buen trabajo para alguien que disfruta de la limpieza y se preocupa por limpiar muy bien. también, a veces, el
          trabajo está bajo presión de tiempo, y necesitamos limpiar bien y rápido, así que esperamos que esté bien para
          usted. Muchas gracias.
        </p>
      </div>
      <div className='detalles__texto'>
        <div className='detalles__titulo'>
          <FaComments />
          <h4>Idiomas hablados</h4>
        </div>
        {parse(idioma)}
      </div>
      <div className='detalles__texto'>
        <div className='detalles__titulo'>
          <FaHouseUser />
          <h4>Alojamiento</h4>
        </div>
        <p>
          sala de tatami privada o compartida. Si es una habitación compartida, habrá 2 en la habitación: 2 mujeres o 2
          hombres. viviríamos juntos y es importante para nosotros que estés limpio y ordenado. estamos teniendo un
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
        <p>{viajerosMinimo}</p>
      </div>
      <div className='detalles__texto'>
        <div className='detalles__titulo'>
          <FaClock />
          <h4>Horario de trabajo</h4>
        </div>
        <p>{horasdia}</p>
      </div>
      <Gallery />
    </>
  )
}
