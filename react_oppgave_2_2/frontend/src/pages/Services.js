// TODO: Denne egner seg for /tjenester og /

import { useState, useEffect } from 'react'
import { getServices } from '../data/serviceFields'
import Filter from '../components/Filter'
import Title from '../components/Title'

export default function Services() {
  const [services, setServices] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
    const getServicesData = async () => {
      setLoading(true)
      try {
        const data = await getServices()
        setServices(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getServicesData()
  }, [])

  return (
    <main className="services">
      <h2 data-testid="title">
        <Title title="Alle tjenester" />
      </h2>
      {!services && error ? <div>noe gikk galt...</div> : null}
      {!services && loading ? <div>Henter service...</div> : null}
      {/* {JSON.stringify(services)} */}
      <Filter services={services} />
    </main>
  )
}

/* TODO: Skal vi flytte inn noe mer fra Filter inn hit? */

/* TODO: Få filter til å virke */

/* TODO: Hvis ingen tjenester ved filtrering. Vis denne */

/* <p data-testid="empty">Ingen tjenester</p> */

/* </section> */
