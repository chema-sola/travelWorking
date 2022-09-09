import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { BiWorld } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Logo from './assets/img/LogoTravel.png'
import QuienesSomos from './pages/QuienesSomos'

export const Menu = ({ idioma }) => {
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
          <Link to='/quienessomos' className='nav-item nav-link '>
            {'QuienesSomos'}
          </Link>
          <Nav className='justify-content-end' style={{ width: '100%' }}>
            <Navbar.Brand>
              <Link to='/login' className='nav-link'>
                {'Login'}
              </Link>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
