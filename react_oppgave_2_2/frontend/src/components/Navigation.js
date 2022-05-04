import { NavLink } from 'react-router-dom'

export default function Navigation() {
  const linkStyle = ({ isActive }) => ({
    border: isActive ? '2px solid #a9a9a9' : 'none',
  })
  return (
    <nav>
      <NavLink to="/" style={linkStyle}>
        {/* TODO: Change "to"? MAKE BIGGER */}
        <h1 data-testid="logo">Tjenesteweb</h1>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/tjenester" style={linkStyle}>
            Tjenester
          </NavLink>
        </li>
        <li>
          <NavLink to="/ny" style={linkStyle}>
            Ny tjeneste
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
