import { NavLink } from 'react-router-dom'

export default function Card({ key, title, preamble, link }) {
  return (
    <div className="card">
    <article key={key}>
      <h3>{title}</h3>
      <p>{preamble}</p>
      <NavLink to={`${link}`}>Til tjeneste</NavLink>
      {/*TODO: passe på at det er "tjenester" foran uansett om man går inn fra forsiden eller "TJENESTER"*/ }
      {/* TODO REPLACE  */}
    </article>
    </div>
  )
}
