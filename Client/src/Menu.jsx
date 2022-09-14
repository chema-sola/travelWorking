import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Logo from './assets/img/LogoTravel.png'

export const Menu = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <nav>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}
