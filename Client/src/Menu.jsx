import { Link } from 'react-router-dom'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Logo from './assets/img/LogoTravel.png'
import { useAuthStore } from './hooks/useAuthStore'

export const Menu = () => {
  const { user } = useSelector((state) => state.auth)
  const { logOut } = useAuthStore()
  return (
    <nav>
      {/* <Container className='menu'>
        <Navbar.Toggle className='menu__togle' aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Link to='/' className='navbar-brand nav-item nav-link '>
            <img className='hero__logoimg' style={{ width: '100px', height: '70px' }} src={Logo} />
          </Link>
          <Link to='/ofertas' className='nav-item nav-link '>
            {'Ofertas'}
          </Link>

          {user.id && (
            <Link to={`/perfil/${user.id}`} className='nav-link'>
              {'Mi perfil'}
            </Link>
          )}
          {user.id && (
            <>
              {user.isHost === 1 ? (
                <Link to={`/private/ofertas/${user.id}`} className='nav-link'>
                  {'Mis ofertas'}
                </Link>
              ) : (
                <Link to={`/private/candidaturas/${user.id}`} className='nav-link'>
                  {'Mis candidaturas'}
                </Link>
              )}
            </>
          )}

          {user.id && <Button onClick={logOut}>{'Log out'}</Button>}
          <Nav className='justify-content-end' style={{ width: '100%' }}>
            <Navbar.Brand>
              {user.id ? (
                <p>{user.nombre}</p>
              ) : (
                <Link to='/auth/login' className='nav-link'>
                  {'Login'}
                </Link>
              )}
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container> */}
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

        {user.id ? (
          <li>{user.nombre}</li>
        ) : (
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
