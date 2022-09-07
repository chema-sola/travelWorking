import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { BiWorld } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const Menu = ({ idioma }) => {
  return (
    <Navbar bg='light' expand='lg' style={{ backgroundColor: '#e3f2fd' }}>
      <Container className='menu'>
        <Navbar.Toggle className='menu__togle' aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Link to='/' className='navbar-brand nav-item nav-link '>
            Principal
          </Link>
          <Link to='/ofertas' className='nav-item nav-link '>
            {'Ofertas'}
          </Link>
          <Link to='/ofertadetallada' className='nav-item nav-link '>
            {'Ofertadetallada'}
          </Link>
          <Nav className='justify-content-end' style={{ width: '100%' }}>
            <Navbar.Brand>
              <Link to='/login' className='nav-link'>
                {'Login'}
              </Link>
            </Navbar.Brand>
            <Dropdown aria-labelledby='dropdownMenuButton'>
              <Dropdown.Toggle>
                <BiWorld />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  size='sm'
                  variant={idioma === 0 ? 'primary' : 'outline-primary'}
                  onClick={() => setIdioma(0)}
                >
                  Español
                </Dropdown.Item>
                <br />
                <Dropdown.Item
                  size='sm'
                  variant={idioma === 1 ? 'primary' : 'outline-primary'}
                  onClick={() => setIdioma(1)}
                >
                  Catalan
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
