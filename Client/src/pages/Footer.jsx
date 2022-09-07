import { Link } from 'react-router-dom'

import './footer.css'

const Footer = () => (
  <div className='footer'>
    <div className='footer__center'>
      <div className='footer__box'>
        <div className='footer__title'>TravelWorking</div>
        <div className='footer__content'>
          <Link to='/'><p>Principal</p></Link>
          <Link to='/ofertas'><p>Ofertas</p></Link>
          <Link to='/login'><p>Login</p></Link>
          <Link to='/register'><p>Registro</p></Link>
          
        </div>
      </div>
      <div className='footer__box'>
        <div className='footer__title'>¿Quienes Somos?</div>
        <div className='footer__content'>
          <p>Ismael Cobo</p>
          <p>Jonotahn</p>
          <p>Wilmer</p>
          <p>Chema Solà</p>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
