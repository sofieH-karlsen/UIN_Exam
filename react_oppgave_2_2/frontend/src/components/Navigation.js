import { NavLink } from 'react-router-dom'

export default function Navigation() {
  const linkStyle = ({ isActive }) => ({
    border: isActive ? '2px solid #a9a9a9' : 'none',
  })
  return (
    <nav>
      <NavLink to="/" style={linkStyle}>
      {/* TODO: Change "to"? */}
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

    // <nav>
    //     <ul data-testid="nav">
    //       <li data-testid="nav_services">
    //         <a data-testid="services_link" href="#">
    //           Tjenester
    //         </a>
    //       </li>
    //       <li data-testid="nav_new">
    //         <a data-testid="create_link" href="#">
    //           Ny
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
  )
}
