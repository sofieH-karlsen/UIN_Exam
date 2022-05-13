// TODO: Denne egner seg for /tjenester og /

import { useState, useEffect } from 'react'
import { getServices } from '../data/serviceFields'
import Filter from '../components/Filter'
import Title from '../components/Title'
import { useParams } from 'react-router-dom'

export default function Services() {
  const [services, setServices] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  const { slug } = useParams()
  // const [boxColor, setBoxColor] = useState('white')

  useEffect(() => {
    const getServicesData = async () => {
      setError(null)
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
      {!services && error ? <div>Noe gikk galt...</div> : null}
      {!services && loading ? <div>Henter tjenester...</div> : null}
      {/* {JSON.stringify(services)} */}
      <Filter services={services} slug={slug}/>
    </main>
  )
}

/* TODO: Skal vi flytte inn noe mer fra Filter inn hit? */

/* TODO: Få filter til å virke */
