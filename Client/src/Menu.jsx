import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Logo from './assets/img/LogoTravel.png'

import './menu.css'

export const Menu = () => {
  const { user } = useSelector((state) => state.auth)
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <>
      <nav className='navigation'>
        <a href='/' className='brand-name'>
          Travel Working
        </a>
        <button
          className='hamburger'
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
          {/* icon from Heroicons.com */}
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='white'>
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
          
            <Link to='/ofertas' className='navigation-menu'>
              {'Ofertas'}
            </Link>
            <Link to={`/perfil/2`} className='navigation-menu'>
              {'No es mi perfil'}
            </Link>
            <Link to='/login' className='navigation-menu'>
              {'Login'}
            </Link>
          
        </div>
      </nav>
    </>
  )
}

/* 


  <Navbar className='nav justify-content-center' expand='lg' style={{ backgroundColor: '#e3f2fd' }}>
      <Container className='menu'>
        <Navbar.Toggle className='menu__togle' aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Link to='/' className=''>
            <img className='hero__logoimg' style={{ width: '100px', height: '70px' }} src={Logo} />
          </Link>
            <Link to='/ofertas' className=''>
              {'Ofertas'}
            </Link>

            <Link to='/ofertadetallada' className=''>
              {'Ofertadetallada'}
            </Link>

            {user.id && (
              <Link to={`/perfil/${user.id}`} className=''>
                {'Mi perfil'}
              </Link>
            )}

            <Link to={`/perfil/2`} className=''>
              {'No es mi perfil'}
            </Link>


          <Nav className='justify-content-end' style={{ width: '100%' }}>
            <Navbar.Brand>
              {user.id ? (
                <button
                  type='button'
                  className='btn btn-lg btn-primary'
                  data-toggle='popover'
                  title='Perfil'
                  data-content={user.nombre}
                >
                  Perfil
                </button>
              ) : (
                <Link to='/login' className=''>
                  {'Login'}
                </Link>
              )}
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

*/
