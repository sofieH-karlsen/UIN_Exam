// import { NavLink } from 'react-router-dom'
import '../styles/scss/main.scss'

export default function Card({ key, title, preamble, link }) {
  return (
    <div className="card">
      <article key={key}>
        <h3>{title}</h3>
        <p>{preamble}</p>
        <a href={`tjenester/${link}`}>Til tjeneste</a>
        {/* TODO REPLACE <NavLink path={`${link}`}>Til tjeneste</NavLink> */}
      </article>
    </div>
    
  )
}
