import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ServiceRoutes from './routes/ServiceRoutes'

export default function App() {
  // TODO: Legg til om nødvendig logikk her
  return (
    <>
      <Navigation />
      <Hero />
      <ServiceRoutes />
      <Footer />
    </>
  )
}
/* TODO: Sjekk om det virkelig ikke kan stå "BrowserRouter rundt App, evt putter vi det her igjen" */
