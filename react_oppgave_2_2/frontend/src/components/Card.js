import { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'

import { getSlug } from '../data/serviceFields'
import Title from './Title'

export default function Card({ service }) {
  // const styleCard = ({ isVisible }) => ({
  //   backgroundColor: isVisible ? '{box}' : 'teal',
  // }) //TODO: ENDRE FARGEFUNKSJONEN

  const [cardSlug, setCardSlug] = useState('')
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    const getCardSlug = async () => {
      try {
        const slugData = await getSlug(slug)
        setCardSlug(slugData)
      } catch (error) {
        console.log(error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getCardSlug()
  }, [slug])

  return (
    <article
      data-testid="service_wrapper"
      className="card"
      key={service.key}
      // style={styleCard}
    >
      <h3 data-testid="services_title">
        <Title title={service.title} />
      </h3>
      <p data-testid="services_preamble">{service.preAmble}</p>
      <NavLink
        data-testid="services_url"
        className="cardLink"
        // onClick={getService}
        to={cardSlug}
      >
        Til tjeneste
      </NavLink>
      {!cardSlug && error ? <div>noe gikk galt...</div> : null}
      {!cardSlug && loading ? <div>Henter slug...</div> : null}
    </article>
  )
}
// eslint-disable-next-line no-lone-blocks
{
  /* TODO: Gjøre at når du klikker her blir det registrert hvilken URL du har valgt å gå inn på  */
}
