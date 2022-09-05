import { useState, useContext } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'
import UseContext from './UseContext'
import traductor from './translate'
import { BiWorld } from 'react-icons/bi'

function App() {
  const [idioma, setIdioma] = useState(0)
  const traduce = (etiqueta) => traductor[etiqueta][idioma]
  const Translate = useContext(UseContext)

  return (
    <UseContext.Provider value={{ traduce, idioma }}>
      <nav class='navbar navbar-expand-lg' style={{ backgroundColor: '#e3f2fd' }}>
        <Container>
          <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div class='navbar-nav'>
              <a class='nav-item nav-link active'>
                <Link to='/' className='navbar-brand'>
                  Principal
                </Link>
              </a>
              <a class='nav-item nav-link'>
                <Link to='/ofertas' className='nav-link'>
                  {'Ofertas'}
                </Link>
              </a>
            </div>
          </div>

          <Navbar>
            <Navbar.Brand>
              <Link to='/login' className='nav-link'>
                {'Login'}
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className='justify-content-end' style={{ width: '100%' }}>
                <div class='dropdown'>
                  <div
                    type='button'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <BiWorld />
                  </div>
                  <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                    <div size='sm' variant={idioma === 0 ? 'primary' : 'outline-primary'} onClick={() => setIdioma(0)}>
                      Español
                    </div>
                    <br />
                    <div size='sm' variant={idioma === 1 ? 'primary' : 'outline-primary'} onClick={() => setIdioma(1)}>
                      Catalan
                    </div>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

         
        </Container>
      </nav>

      <Container>
        <Outlet />
      </Container>
    </UseContext.Provider>
  )
}

export default App
