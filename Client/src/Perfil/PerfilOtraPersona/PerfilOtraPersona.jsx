import React from 'react'
import { useEffect } from 'react'
import { useAuthStore } from '../../hooks'

export const PerfilOtraPersona = ({ id }) => {
  const { activeUser, startGettingInfoProfile } = useAuthStore()
  useEffect(() => {
    startGettingInfoProfile(id)
  }, [id])

  return (
    <>
      {activeUser?.id ? (
        <div className='container'>
          <div className='box'>
            <p className='h-dash'>Tu Perfil</p>
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
                  <p className='textmuted mb-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam dignissimos tenetur similique
                    sit quas illum. Veniam magnam quisquam ipsam a totam nam. Molestiae praesentium molestias mollitia
                    voluptatibus autem sint.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='box2 mt-3'>
                <div className='d-flex mt-2'>
                  <span className='fas fa-bookmark ms-0 mt-1'></span>
                  <div className='w-100 ps-2 '>
                    <p className=''>DNI</p>
                    <p className='textmuted mb-2'>{activeUser.dni}</p>
                  </div>
                  <div className='w-100 ps-2'>
                    <p className=''>Nombre</p>
                    <p className='textmuted mb-2'>{activeUser.nombre}</p>
                  </div>
                  <div className='w-100 ps-2'>
                    <p className=''>ApellactiveUseros</p>
                    <p className='textmuted mb-2'>{activeUser.apellidos}</p>
                  </div>
                </div>
              </div>

              <div className='box2 mt-3'>
                <div className='d-flex mt-2'>
                  <span className='fas fa-bookmark ms-0 mt-1'></span>
                  <div className='w-100 ps-2 '>
                    <p className=''>Email</p>
                    <p className='textmuted mb-2'>{activeUser.email}</p>
                  </div>
                  <div className='w-100 ps-2'>
                    <p className=''>Edad </p>
                    <p className='textmuted mb-2'>{activeUser.edad}</p>
                  </div>
                  <div className='w-100 ps-2'>
                    <p className=''>Teléfono</p>
                    <p className='textmuted mb-2'>{activeUser.telefono}</p>
                  </div>
                </div>
              </div>

              <div className='box2 mt-3'>
                <div className='d-flex mt-2'>
                  <span className='fas fa-bookmark ms-0 mt-1'></span>
                  <div className='w-100 ps-2 '>
                    <p className=''>Pais</p>
                    <p className='textmuted mb-2'>{activeUser.pais}</p>
                  </div>
                  <div className='w-100 ps-2'>
                    <p className=''>Ciudad </p>
                    <p className='textmuted mb-2'>{activeUser.ciudad}</p>
                  </div>
                  <div className='w-100 ps-2'>
                    <p className=''>Codigo Postal</p>
                    <p className='textmuted mb-2'>{activeUser.cpostal}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

