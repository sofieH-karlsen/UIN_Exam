import { NavLink } from 'react-router-dom'
import Title from './Title'
// import Service from './Service'
import { getData } from '../data/serviceFields'


export default function Card({ key, title, preamble, slug, }) {
  //const card = {services}
  //const data = card.map((services)) => {card.services}
  return (
    <article data-testid="service_wrapper" className="card" key={key}>
      <h3 data-testid="services_title">
        <Title title={title} />
      </h3>
      <p data-testid="services_preamble">{preamble}</p>
      <NavLink
        data-testid="services_url"
        className="cardLink"
        to="/tjenester/unik"
        onClick={getData}
        //onClick={(services) => {
          //searchTerm(services.target.value)}}
      >
        {/* (props)} to={link} to="/tjenester/valgt-tjeneste" onClick={(select) => Service(select)} }*/} {/*TODO: Gjøre at når du klikker her blir det registrert hvilken URL du har valgt å gå inn på  */}
        {/* to={services.slug} to={slug} */}
        Til tjeneste

      </NavLink>
    </article>
  )
}
