import { NavLink } from 'react-router-dom'
// import Service from './Service'

export default function Card({ key, title, preamble, link }) {
  return (
    <article className="card" key={key}>
      <h3>{title}</h3>
      <p>{preamble}</p>
      <NavLink to="/tjenester/valgt-tjeneste">
        {/* to={`/tjenester/${link}`} onClick={(select) => Service(select)} } TODO: Gjøre at når du klikker her blir det registrert hvilken URL du har valgt å gå inn på  */}
        Til tjeneste
      </NavLink>
      {/* TODO: passe på at det er "tjenester" foran uansett om man går inn fra forsiden eller "TJENESTER" */}
    </article>
  )
}
