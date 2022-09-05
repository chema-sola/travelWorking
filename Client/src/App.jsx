import { useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import UseContext from './UseContext'
import traductor from './translate'
import { Menu } from './Menu'

function App() {
  const [idioma, setIdioma] = useState(0)
  const traduce = (etiqueta) => traductor[etiqueta][idioma]
  const Translate = useContext(UseContext)

  return (
    <UseContext.Provider value={{ traduce, idioma }}>
      {/* <Navbar className='navbar navbar-expand-lg' style={{ backgroundColor: '#e3f2fd' }}>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
              <div className='navbar-nav'>
                <Link to='/' className='navbar-brand nav-item nav-link '>
                  Principal
                </Link>
                <Link to='/ofertas' className='nav-item nav-link '>
                  {'Ofertas'}
                </Link>
              </div>
            </div>

            <Navbar.Toggle />
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
      </Navbar> */}

      <Menu idioma={idioma} />
      {/* <Container> */}
      <Outlet />
      {/* </Container> */}
    </UseContext.Provider>
  )
}

export default App
