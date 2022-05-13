import { useParams } from 'react-router-dom'
import ServiceRoutes from './routes/ServiceRoutes'

export default function App() {
  // TODO: Legg til om nødvendig logikk her
  const { slug, box } = useParams
  return <ServiceRoutes slug={slug} box={box} />
}
