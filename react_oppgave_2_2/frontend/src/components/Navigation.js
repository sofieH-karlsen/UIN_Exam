import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={linkStyle}
            className={({ isActive }) => (isActive ? 'activated' : '')}
          >
            Hjem
          </NavLink>
        </li>
        <li>
          <NavLink to="/om" style={linkStyle}>
            Om
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
