import { NavLink } from 'react-router-dom'
import Title from './Title'

export default function Navigation() {
  const linkStyle = ({ isActive }) => ({
    borderBottom: isActive ? '2px solid #a9a9a9' : 'none',
  })

  const styleBox = ({ isActive }) => ({
    backgroundColor: isActive ? 'turquoise' : 'none',
  })
  /* GJØRE OM DENNE TIL UNDERLINE */

  return (
    <nav>
      <NavLink to="/" className="active-nav" style={linkStyle}>
        {/* TODO: Change "to"? MAKE BIGGER */}
        <h1 data-testid="logo">
          <Title title="Tjenesteweb" />
        </h1>
      </NavLink>
      <ul>
        <li>
          <NavLink className="active-nav" to="/tjenester" style={linkStyle}>
            Tjenester
          </NavLink>
        </li>
        <li>
          <NavLink className="active-nav newService" to="/ny" style={styleBox}>
            Ny tjeneste
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
