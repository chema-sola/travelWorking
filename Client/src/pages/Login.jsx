import { Link } from 'react-router-dom'
import './login.css'
function Login() {
  return (
    <>
      <div className='Allogin'>
        <div className='formbg'>
          <div className='formbg-inner padding-horizontal--48'>
            <span className='padding-bottom--15'>Accede a tu cuenta de Travel&Working</span>
            <form id='stripe-login'>
              <div className='field padding-bottom--24'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' placeholder='Escriba su correo electrónico' />
              </div>
              <div className='field padding-bottom--24'>
                <div className='grid--50-50'>
                  <label htmlFor='password'>Contraseña</label>
                  <div className='reset-pass'></div>
                </div>
                <input type='password' name='password' placeholder='Escriba su contraseña' />
              </div>

              <div className='field padding-bottom--24'>
                <input type='submit' name='submit' value='Entrar' />
              </div>
              <Link to="/register">¿Aún no tienes cuenta?</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
