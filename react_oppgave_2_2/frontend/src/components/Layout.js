// import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Hero from './Hero'
import Navigation from './Navigation'
import Services from './Services'

export default function Layout() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      {/* <Outlet /> */}
      <Footer />
    </>
  )
}
