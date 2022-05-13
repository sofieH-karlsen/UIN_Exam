import { useState, useEffect } from 'react'
import { getService } from '../data/serviceFields'
import ServiceBox from '../components/ServiceBox'
import ViewService from '../components/ViewService'

// TODO: kan nås med /tjenester/valgt-tjeneste

export default function Service({ slug }) {
  const [service, setService] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

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

  // const service = service.find((service) => service.id == id)

  
  return (  JSON.stringify(service.slug))

  (service?.map((service) => (
    <div>
      {!service && error ? <div>noe gikk galt...</div> : null}
      {!service && loading ? <div>Henter service...</div> : null}
      <ViewService service={service} />
      <ServiceBox service={service} />
    </div>
  )))
}
/* BRUKE MAP IGJEN FOR Å SKrIVE UT? */
