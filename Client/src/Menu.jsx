import { Link } from 'react-router-dom'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useAuthStore } from './hooks/useAuthStore'
import Logo from './assets/img/LogoTravel.png'
import { FiLogIn } from 'react-icons/fi'

export const Menu = () => {
  const { user } = useSelector((state) => state.auth)
  const { logOut } = useAuthStore()
  return (
    <nav>
      <ul>
        <Link to='/' className='navbar-brand nav-item nav-link '>
          <img className='hero__logoimg' style={{ width: '85px', height: '75px' }} src={Logo} />
        </Link>
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

        {user.id ? (
          <li></li>
        ) : (
          <li>
            <Link to='/auth/login' className='menu__logout btn btn-primary'>
              {'Login'}
            </Link>
          </li>
        )}
        {user.id && (
          <li>
            <Button className='menu__logout' onClick={logOut}>
              {
                <>
                  <FiLogIn />
                  <p style={{ marginBottom: 0 }}>Log out</p>
                </>
              }
            </Button>
          </li>
        )}
      </ul>
    </nav>
  )
}
