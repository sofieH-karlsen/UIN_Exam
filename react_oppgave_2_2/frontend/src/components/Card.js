// import { NavLink } from 'react-router-dom'
import Title from './Title'

export default function Card({ services }) {
  // const styleCard = ({ isVisible }) => ({
  //   backgroundColor: isVisible ? '{box}' : 'teal',
  // }) //TODO: ENDRE FARGEFUNKSJONEN

  return (
    <article
      data-testid="service_wrapper"
      className="card"
      key={services.key}
      // style={styleCard}
    >
      <h3 data-testid="services_title">
        <Title title={services.title} />
      </h3>
      <p data-testid="services_preamble">{services.preAmble}</p>
      {/* <NavLink
        data-testid="services_url"
        className="cardLink"
        to={services.link}
        // onClick={getService}
      >
     
        Til tjeneste
        </NavLink> */}
    </article>
  )
}
    {/*TODO: Gjøre at når du klikker her blir det registrert hvilken URL du har valgt å gå inn på  */}
      {/* to={services.slug} to={slug}*/}