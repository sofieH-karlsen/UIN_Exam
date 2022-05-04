import { Route, Routes } from 'react-router-dom'
import Services from './components/Services'
import Service from './components/Service'
import Create from './components/Create'
import NoMatch from './components/NoMatch'
import Layout from './components/Layout'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Footer from './components/Footer'

export default function App() {
  // TODO: Legg til om nødvendig logikk her
  return (
    <>
      <Navigation />
      <Hero />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Services />} />
          <Route path="tjenester" element={<Services />}>
            <Route path="en-unik-url" element={<Service />} />
            <Route path="ny" element={<Create />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}
/* TODO: Sjekk om det virkelig ikke kan stå "BrowserRouter rundt App, evt putter vi det her igjen" */
