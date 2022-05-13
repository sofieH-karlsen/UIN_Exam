// TODO: fjerne overflødige klasser
// TODO: Viktig! Bytte funksjon til å være avhengig av classname=underline

import { NavLink } from 'react-router-dom'
import Title from './Title'

export default function Navigation() {
  const underline = ({ isActive }) => ({
    borderBottom: isActive ? '2px solid #a9a9a9' : 'none',
  })

  const styleBox = ({ isActive }) => ({
    backgroundColor: isActive ? 'turquoise' : 'teal',
  })


  return (
    <nav>
      <h1 data-testid="logo">
        <NavLink
          data-testid="logo_link"
          to="/"
          className="active-nav"
          style={underline}
        >
          <Title title="Tjenesteweb" />
        </NavLink>
      </h1>
      <ul data-testid="nav">
        <li data-testid="nav_services">
          <NavLink
            data-testid="services_link"
            className="active-nav"
            to="/tjenester"
            style={underline}
          >
            Tjenester
          </NavLink>
        </li>
        <li data-testid="nav_new">
          <NavLink
            data-testid="create_link"
            className="active-nav newService"
            to="/ny"
            style={styleBox}
          >
            Ny tjeneste
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
