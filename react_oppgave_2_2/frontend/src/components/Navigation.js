import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink 
          to="/"
          className={({isActive}) => (isActive ? 'activated' : '')}
          >
            Home
            </NavLink>
        </li>
        <li>
        <NavLink 
          to="/ny"
          className={({isActive}) => (isActive ? 'activated' : '')}
          >
            Create
            </NavLink>
        </li>
      </ul>
    </nav>
  );
}