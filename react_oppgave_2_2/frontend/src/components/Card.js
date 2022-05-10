import { NavLink } from 'react-router-dom'
import Title from './Title'
// import Service from './Service'
//import { services } from '../data/services'

export default function Card({ key, title, preamble, slug }) {
  return (
    <article data-testid="service_wrapper" className="card" key={key}>
      <h3 data-testid="services_title">
        <Title title={title} />
      </h3>
      <p data-testid="services_preamble">{preamble}</p>
      <NavLink
        data-testid="services_url"
        className="cardLink"
        to="tjenester/unik"
      >
        {/* (props)} to={link} to="/tjenester/valgt-tjeneste" onClick={(select) => Service(select)} }*/} {/*TODO: Gjøre at når du klikker her blir det registrert hvilken URL du har valgt å gå inn på  */}
        {/* to={services.slug} to={slug} */}
        Til tjeneste
        {/*<p>Til tjeneste {slug}</p>*/}
      </NavLink>
    </article>
  )
}
