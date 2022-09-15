import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore, useForm } from '../hooks'

import './login.css'

const formValues = {
  email: 'midismael@gmail.com',
  password: '1234',
}
function Login() {
  const [formState, handleInputChange] = useForm(formValues)
  const { startLogin } = useAuthStore()

  const { email, password } = formState

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email && !password) return

    startLogin({ email, password })
  }

  return (
    <>
      <div className='Allogin'>
        <div className='formbg'>
          <div className='formbg-inner padding-horizontal--48'>
            <span className='padding-bottom--15'>Accede a tu cuenta de Travel&Working</span>
            <form onSubmit={handleSubmit} id='stripe-login'>
              <div className='field padding-bottom--24'>
                <label htmlFor='email'>Email</label>
                <input
                  onChange={handleInputChange}
                  value={email}
                  type='email'
                  name='email'
                  placeholder='Escriba su correo electrónico'
                />
              </div>
              <div className='field padding-bottom--24'>
                <div className='grid--50-50'>
                  <label htmlFor='password'>Contraseña</label>
                  <div className='reset-pass'></div>
                </div>
                <input
                  onChange={handleInputChange}
                  value={password}
                  type='password'
                  name='password'
                  placeholder='Escriba su contraseña'
                />
              </div>

              <div className='field padding-bottom--24'>
                <input type='submit' name='submit' value='Entrar' />
              </div>
              <Link to='/auth/register'>¿Aún no tienes cuenta?</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
