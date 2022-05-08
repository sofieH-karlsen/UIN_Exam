import { NavLink } from 'react-router-dom'
import Title from './Title'
// import Service from './Service'

export default function Card({ key, title, preamble }) {
  return (
    <article className="card" key={key}>
      <h3>
        <Title title={title} />
      </h3>
      <p>{preamble}</p>
      <NavLink className="cardLink" to="/tjenester/valgt-tjeneste">
        {/* , link (props)} to={`/tjenester/${link}`} onClick={(select) => Service(select)} } TODO: Gjøre at når du klikker her blir det registrert hvilken URL du har valgt å gå inn på  */}
        Til tjeneste
      </NavLink>
    </article>
  )
}
