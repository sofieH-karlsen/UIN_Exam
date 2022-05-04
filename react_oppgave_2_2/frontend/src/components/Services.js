// TODO: Denne egner seg for /tjenester og /

// import { services } from '../data/services'

export default function Services() {
  return (
    <main>
      <h2 data-testid="title">Alle tjenester</h2>
      {/* TODO: Få filter til å virke */}
      <label htmlFor="search">
        Søk:
        <input
          data-testid="search"
          id="search"
          name="search"
          type="search"
          placeholder="Søk etter tjenester"
        />
      </label>
      <section data-testid="services">
        {/* TODO: Bruk .map til å skrive ut tjenester services.map((service) => (
            <ul>
              <li>{service.title}</li>
            </ul>
          )) */}
        {/* <Card /> */}
        <article data-testid="service_wrapper">
          <h3 data-testid="services_title">Tjeneste tittel</h3>
          <p data-testid="services_preamble">Tjeneste ingress</p>
          <a data-testid="services_url">Til tjeneste</a>
        </article>
        {/* TODO: Hvis ingen tjenester ved filtrering. Vis denne */}
        <p data-testid="empty">Ingen tjenester</p>
      </section>
    </main>
  )
}
