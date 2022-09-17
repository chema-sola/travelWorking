import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Logo from './assets/img/LogoTravel.png'
import { useAuthStore } from './hooks'

export const Menu = () => {
  const { user, logOut } = useAuthStore()
  return (
    <nav>
      <ul>
        <li>
          <Link to='/' className='navbar-brand nav-item nav-link '>
            <img className='hero__logoimg' style={{ width: '70px', height: '50px' }} src={Logo} />
          </Link>
        </li>
        <li>
          <Link to='/ofertas' className='nav-item nav-link '>
            {'Ofertas'}
          </Link>
        </li>
        {user.id && (
          <li>
            <Link to={`/perfil/${user.id}`} className='nav-link'>
              {'Mi perfil'}
            </Link>
          </li>
        )}
        {user.id && (
          <>
            {user.isHost === 1 ? (
              <li>
                <Link to={`/private/ofertas/${user.id}`} className='nav-link'>
                  {'Mis ofertas'}
                </Link>
              </li>
            ) : (
              <li>
                <Link to={`/private/candidaturas/${user.id}`} className='nav-link'>
                  {'Mis candidaturas'}
                </Link>
              </li>
            )}
          </>
        )}

        {!user.id && (
          <li>
            <Link to='/auth/login' className='nav-link'>
              {'Login'}
            </Link>
          </li>
        )}
        {user.id && (
          <li>
            <Button onClick={logOut}>{'Log out'}</Button>
          </li>
        )}
      </ul>
    </nav>
  )
}
