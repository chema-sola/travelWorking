import { Link } from 'react-router-dom'
import logo from '../assets/img/LogoTravel.png'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

import './footer.css'

function Footer() {
  return (
    <div>
      <footer className='footer-distributed'>
        <div className='footer-left'>
          <span>
            {' '}
            <img src={logo} alt='logo' style={{ width: '170px' }} />{' '}
          </span>

          <p className='footer-company-name'>Travel Working © 2022</p>
          <span className='footer-company-name'>Todos los derechos reservados</span>
        </div>
        <div className='footer-center'>
          <div>
            <i className='fa fa-map-marker' />
            <p>Contacto</p>
          </div>
          <div>
            <i className='fa fa-phone' />
            <p>+34.976.543.788</p>
          </div>
          <div>
            <i className='fa fa-envelope' />
            <p>
              <a href='mailto:support@company.com'>soporte@travelworking.com</a>
            </p>
            <span className='fa fa-map-marker'>Redes sociales</span>
            <div className='footer__iconos'>
              <FaFacebook size={30} />
              <FaTwitter size={30} />
              <FaLinkedin size={30} />
              <FaInstagram size={30} />
            </div>
          </div>
        </div>
        <div className='footer-right'>
          <p className='footer-company-about'>
            <span>Quienes somos</span>
            Somos un grupo de personas con ganas de ayudar a los que desean cumplir su sueño de viajar, pero no disponen
            de los recursos necesarios para ello. Creemos en un mundo justo donde debe haber oportunidades para todas
            las personas.{' '}
          </p>
        </div>
      </footer>
    </div>
  )
}
export default Footer
