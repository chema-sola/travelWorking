import { Link } from 'react-router-dom'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Logo from './assets/img/LogoTravel.png'
import { useAuthStore } from './hooks/useAuthStore'

export const Menu = () => {
  const { user } = useSelector((state) => state.auth)
  const { logOut } = useAuthStore()
  return (
    <Navbar expand='lg' style={{ backgroundColor: '#e3f2fd' }}>
      <Container className='menu'>
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
            <Link to={`/private/candidaturas/${user.id}`} className='nav-link'>
              {'Mis candidaturas'}
            </Link>
          )}

          {user.id && (
            <Link to={`/ofertas/${user.id}`} className='nav-link'>
              {'Mis ofertas'}
            </Link>
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
      </Container>
    </Navbar>
  )
}
