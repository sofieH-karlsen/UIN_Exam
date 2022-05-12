import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getService } from '../data/serviceFields'
import Title from '../components/Title'

// TODO: kan nås med /tjenester/valgt-tjeneste

export default function Service() {
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    const getServiceData = async () => {
      setLoading(true)
      try {
        const serviceData = await getService(slug)
        setService(serviceData)
      } catch (error) {
        console.log(error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getServiceData()
  }, [slug])
  console.log('oki')
  
  // const selectedService = select.target.value;
  return service.map((service) => (
    <div key={service?.key}>
      <main>
      {(!service && error) ? <div>noe gikk galt...</div> : null}
      {(!service && loading) ? <div>Henter service...</div> : null}
        <h2 data-testid="service_title">
          <Title title={service?.title} />
        </h2>
        <section>
          {/* TODO: Bytte ut med riktig dynamisk verdi */}
          <span data-testid="service_slogan">"{service?.slogan}" - </span>
          <span>CEO, Tjenesteweb</span>
        </section>
        <section>
          {/* TODO: Bytte ut med riktig dynamisk verdi */}
          <p data-testid="service_preamble">{service?.preAmble}</p>
          {/* TODO: Bytte ut med riktig dynamisk verdi */}
          <h3 data-testid="service_content_title">
            {service?.initialTitle}
          </h3>
          {/* TODO: Bytte ut med riktig dynamisk verdi */}
          <p data-testid="service_content_text">
            {service?.portableText}
          </p>
          <article data-testid="service_text">
            {/* Her kommer tekst fra "text" laget i Ny */}
            {/* Portable text how to: https://www.sanity.io/docs/presenting-block-text#234900ff90d0 */}
          </article>
        </section>
      </main>
      <aside>
        {/* TODO: Bytte ut Farge med riktig dynamisk verdi */}

        <div data-testid="service_box" data-color="Farge">
          Boks design selectedColor: {service?.box}
        </div>
      </aside>
    </div>
  ))
}
/* BRUKE MAP IGJEN FOR Å SKrIVE UT? */
