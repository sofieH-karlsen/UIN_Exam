import Title from './Title'

export default function Card() {
  return (
    <article data-testid="service_wrapper">
      <Title />
      <p data-testid="services_preamble">Tjeneste ingress</p>
      <a data-testid="services_url">Til tjeneste</a>
    </article>
  )
}
