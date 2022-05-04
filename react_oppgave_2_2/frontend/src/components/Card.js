import { NavLink } from 'react-router-dom'
import Title from './Title'

export default function Card() {
  return (
    <article data-testid="service_wrapper">
      <Title />
      <p data-testid="services_preamble">Tjeneste ingress</p>
      <NavLink to="en-unik-url" data-testid="services_url">Til tjeneste</NavLink>
    </article>
  )
}
