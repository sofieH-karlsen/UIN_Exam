// import { NavLink } from 'react-router-dom'

export default function Card({ key, title, preamble, link }) {
  return (
    <article key={key}>
      <h3>{title}</h3>
      <p>{preamble}</p>
      <a href={`${link}`}>Til tjeneste</a>

      {/* <NavLink path={`${link}`}>Til tjeneste</NavLink> */}
    </article>
  )
}
