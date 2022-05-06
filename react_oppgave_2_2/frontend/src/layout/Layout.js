import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div className="container">
      <header>{/* COOMPONENT? */}
        <Navigation />
        <Hero />
      </header>
      <Outlet />
      <Footer />
    </div>
  )
}
