//import './EditPErfil.css'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../hooks'

export const EditPerfil = () => {
  const {user} = useAuthStore()
  return (
    <>
      <div className='container'>
        <div className='box'>
          <p className='h-dash'>Editar Tu Perfil</p>
          <p className='fst-italic textmuted'>Tu información esta en publico</p>
          <div className='row mx-0 mt-2'>
            <div className='col-md-4 p-0 border-end'>
              <div className='viewbox'>
                <p>Imagen </p>
              </div>
            </div>

            <div className='col-md-8 p-0'>
              <div className='viewbox'>
                <p className=''>Descripción</p>
                <div class='input-group'>
                  <span class='input-group-text'>With textarea</span>
                  <textarea class='form-control' aria-label='With textarea'></textarea>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='box2 mt-3'>
              <div className='d-flex mt-2'>
                <span className='fas fa-bookmark ms-0 mt-1'></span>
                <div className='w-100 ps-2 '>
                  <p className=''>DNI</p>
                  <p className='textmuted mb-2'>{user.dni}</p>
                </div>
                <div className='w-100 ps-2'>
                  <p className=''>Nombre</p>
                  <p className='textmuted mb-2'>{user.nombre}</p>
                </div>
                <div className='w-100 ps-2'>
                  <p className=''>Apellidos</p>
                  <p className='textmuted mb-2'>{user.apellidos}</p>
                </div>
              </div>
            </div>

            <div className='box2 mt-3'>
              <div className='d-flex mt-2'>
                <span className='fas fa-bookmark ms-0 mt-1'></span>
                <div className='w-100 ps-2 '>
                  <p className=''>Email</p>
                  <p className='textmuted mb-2'>{user.email}</p>
                </div>
                <div className='w-100 ps-2'>
                  <p className=''>Edad </p>
                  <p className='textmuted mb-2'>{user.edad}</p>
                </div>
                <div className='w-100 ps-2'>
                  <p className=''>Teléfono</p>
                  <p className='textmuted mb-2'>{user.telefono}</p>
                </div>
              </div>
            </div>

            <div className='box2 mt-3'>
              <div className='d-flex mt-2'>
                <span className='fas fa-bookmark ms-0 mt-1'></span>
                <div className='w-100 ps-2 '>
                  <p className=''>Pais</p>
                  <p className='textmuted mb-2'>{user.pais}</p>
                </div>
                <div className='w-100 ps-2'>
                  <p className=''>Ciudad </p>
                  <p className='textmuted mb-2'>{user.ciudad}</p>
                </div>
                <div className='w-100 ps-2'>
                  <p className=''>Codigo Postal</p>
                  <p className='textmuted mb-2'>{user.cpostal}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='box__title'>
            <Link to='/ofertas' className='button_mostrarMas'>
              Guardar
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

