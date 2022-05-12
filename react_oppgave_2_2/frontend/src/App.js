import ServiceRoutes from './routes/ServiceRoutes'
import { useEffect, useState } from 'react'
import { getData } from './data/serviceFields'
import { useParams } from 'react-router'

export default function App() {
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  const {slug} = useParams()
  
  useEffect(() => {
    const getServiceData = async () => {
      setLoading(true)
      try{
        const serviceData = await getData(slug)
        setService(serviceData)
      } catch (error){
        console.log(error)
        setError(error)
      } finally{
        setLoading(false)
      }
    }
    getServiceData()
  }, [slug])
    
  /*const [service, setService] = useEffect()
  const getServiceData = async () => {
    const data = await getData()
    console.log(data) },[]);
  }*/

  /*useEffect(() => {
    const getServiceData = async () => {
      const data = await fetch({getData});
    }
  },[getData]);*/
  
  
  // TODO: Legg til om nødvendig logikk her
  return (
    <>
    <ServiceRoutes service={service} setService={setService} />
    </>
  )   
}
/*service={service} setService={setService} onChange={getServiceData}*/