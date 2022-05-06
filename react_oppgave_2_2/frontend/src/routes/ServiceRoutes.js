import { Route, Routes } from 'react-router-dom'
// import { services } from '../data/services'
import Services from '../components/Services'
import Service from '../components/Service'
import Create from '../components/Create'
import NoMatch from '../components/NoMatch'
import Layout from '../components/Layout'

export default function ServiceRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Services />} />
        <Route path="tjenester" element={<Services />} />
        <Route path="tjenester/valgt-tjeneste" element={<Service />} />
        {/* TODO: passe på at det er "tjenester" foran uansett om man går inn fra forsiden eller "TJENESTER" 
        denne gjør det til den du har klikket på {services.slug} brukte jeg tidligere */}
        <Route path="ny" element={<Create />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
