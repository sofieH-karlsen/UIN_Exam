import { NavLink } from 'react-router-dom'
import Title from './Title'

export default function Card({ services }) {
  // const styleCard = ({ isVisible }) => ({
  //   backgroundColor: isVisible ? '{service.box}' : 'teal',
  // }) //TODO: ENDRE FARGEFUNKSJONEN

  return (
    <article
      data-testid="service_wrapper"
      className="card"
      key={services?.id}
      // style={styleCard}
    >
      <h3 data-testid="services_title">
        <Title title={services?.title} />
      </h3>
      <p data-testid="services_preamble">{services?.preAmble}</p>
      <NavLink
        data-testid="services_url"
        className="cardLink"
        to={`tjenester/${services?.slug}`}
      >
        Til tjeneste
      </NavLink>
    </article>
  )
}
{
  /* TODO: Gjøre at når du klikker her blir det registrert hvilken URL du har valgt å gå inn på  */
}
