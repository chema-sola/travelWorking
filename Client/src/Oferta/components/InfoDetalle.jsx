import { Link, useParams } from 'react-router-dom'

import parse from 'html-react-parser'

import { BiClipboard } from 'react-icons/bi'
import { BsInfoCircleFill } from 'react-icons/bs'
import { FaHandsHelping, FaChild, FaComments, FaHouseUser, FaBed, FaClock } from 'react-icons/fa'
import { IoIosSchool } from 'react-icons/io'

import { Gallery } from './gallery'

export const InfoDetalle = ({ trabajoActive, user, inscribirseFn }) => {
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
    alojamiento,
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
                {user.isHost === 0 && !user.candidaturas.some((candidatura) => candidatura.id == id) ? (
                  <button onClick={() => inscribirseFn(id, user.id)} className='button'>
                    Inscribirme
                  </button>
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
        <p>{alojamiento}</p>
      </div>

      <div className='detalles__texto'>
        <div className='detalles__titulo'>
          <BsInfoCircleFill />
          <h4>Otros</h4>
        </div>
        {parse(otros)}
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
      <div style={{ marginTop: '3rem' }}>
        <Gallery />
      </div>
    </>
  )
}
