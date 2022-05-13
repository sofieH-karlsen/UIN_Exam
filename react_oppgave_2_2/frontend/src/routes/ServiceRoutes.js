import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Services from '../pages/Services'
import Service from '../pages/Service'
import Create from '../pages/Create'
import NoMatch from '../pages/NoMatch'

export default function ServiceRoutes({slug}) {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Services />} />
        <Route path="tjenester">
          <Route index element={<Services />} />
          <Route path= {slug} element={<Service />} />
        </Route>
        <Route path="ny" element={<Create />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
