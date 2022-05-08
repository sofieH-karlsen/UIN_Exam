import { Route, Routes } from 'react-router-dom'
import Services from '../components/Services'
import Service from '../components/Service'
import Create from '../components/Create'
import NoMatch from '../components/NoMatch'
import Layout from '../layout/Layout'

export default function ServiceRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Services />} />
        <Route path="tjenester">
          <Route index element={<Services />} />
          <Route path="slug" element={<Service />} />
        </Route>
        <Route path="ny" element={<Create />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
