import { NavLink } from 'react-router-dom'
import Title from './Title'
// import Service from './Service'

export default function Card({ key, title, preamble, /*link*/ }) {
  return (
    <article className="card" key={key}>
      <h3>
        <Title title={title} />
      </h3>
      <p>{preamble}</p>
      <NavLink className="cardLink" to="/tjenester/unik">
        {/* (props)} to=/tjenester/valgt-tjeneste onClick={(select) => Service(select)} } TODO: Gjøre at når du klikker her blir det registrert hvilken URL du har valgt å gå inn på  */}
        Til tjeneste
      </NavLink>
      {/*to={link}*/}
    </article>
  )
}
