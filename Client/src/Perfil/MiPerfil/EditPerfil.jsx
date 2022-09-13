//import './EditPErfil.css'
import { useAuthStore, useForm } from '../../hooks'

export const EditPerfil = () => {
  const { user, startUpdatingPerfil } = useAuthStore()
  const [formValues, onChange] = useForm(user)

  function UpdateUser(e) {
    e.preventDefault()
    console.log(formValues)
    startUpdatingPerfil(formValues)
  }

  return (
    <>
      <form onSubmit={UpdateUser}>
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
                  <div className='input-group'>
                    <textarea
                      className='form-control'
                      name='descripcion'
                      onChange={onChange}
                      value={formValues.descripcion || ''}
                    />
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
                    <input type='text' name='dni' value={formValues.dni} onChange={onChange} />
                  </div>
                  <div className='w-100 ps-2'>
                    <p className=''>Nombre</p>
                    <input type='text' name='nombre' value={formValues.nombre} onChange={onChange} />
                  </div>
                  <div className='w-100 ps-2'>
                    <p className=''>Apellidos</p>
                    <input type='text' name='apellidos' value={formValues.apellidos} onChange={onChange} />
                  </div>
                </div>
              </div>

              <div className='box2 mt-3'>
                <div className='d-flex mt-2'>
                  <span className='fas fa-bookmark ms-0 mt-1'></span>
                  <div className='w-100 ps-2 '>
                    <p className=''>Email</p>
                    <input type='text' name='email' value={formValues.email} onChange={onChange} />
                  </div>
                  <div className='w-100 ps-2'>
                    <p className=''>Edad </p>
                    <input type='text' name='edad' value={formValues.edad} onChange={onChange} />
                  </div>
                  <div className='w-100 ps-2'>
                    <p className=''>Teléfono</p>
                    <input type='text' name='telefono' value={formValues.telefono} onChange={onChange} />
                  </div>
                </div>
              </div>

              <div className='box2 mt-3'>
                <div className='d-flex mt-2'>
                  <span className='fas fa-bookmark ms-0 mt-1'></span>
                  <div className='w-100 ps-2 '>
                    <p className=''>Pais</p>
                    <input type='text' name='pais' value={formValues.pais} onChange={onChange} />
                  </div>
                  <div className='w-100 ps-2'>
                    <p className=''>Ciudad </p>
                    <input type='text' name='ciudad' value={formValues.ciudad} onChange={onChange} />
                  </div>
                  <div className='w-100 ps-2'>
                    <p className=''>Codigo Postal</p>
                    <input type='text' name='cpostal' value={formValues.cpostal} onChange={onChange} />
                  </div>
                </div>
              </div>
            </div>
            <div className='box__title'>
              <input type='submit' value='Guardar' />
              {/*  <Link to='/ofertas' className='button_mostrarMas'>
                Guardar
              </Link> */}
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
