import Title from '../components/Title'
// import { PortableText } from '@portabletext/react'

export default function ViewService({ service }) {
  return (
    <main key={service?.key}>
    <h2 data-testid="service_title">
      <Title title={service?.title} />
    </h2>
    <section className="quote">
      {/* TODO: Bytte ut med riktig dynamisk verdi */}
      <span data-testid="service_slogan">"{service?.slogan}" - </span>
      <span>CEO, Tjenesteweb</span>
    </section>
    <section>
      {/* TODO: Bytte ut med riktig dynamisk verdi */}
      <p data-testid="service_preamble">{service?.preamble}</p>
      {/* TODO: Bytte ut med riktig dynamisk verdi */}
      <h3 data-testid="service_content_title">{service?.initialTitle}</h3>
      {/* TODO: Bytte ut med riktig dynamisk verdi */}
      <p data-testid="service_content_text">{service?.portableText}</p>
              
      /*//TODO Portable text how to: https://www.sanity.io/docs/presenting-block-text#234900ff90d0 */
<article data-testid="service_text">
        {/* Her kommer tekst fra "text" laget i Ny */}
                
        
      </article>
    </section>
  </main>
  )
}