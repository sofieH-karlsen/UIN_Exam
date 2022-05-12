import { services } from '../data/services'
import Title from '../components/Title'


// TODO: kan nås med /tjenester/valgt-tjeneste

export default function Service() {
  // const selectedService = select.target.value;
  return services.map((eachService) => (
    <div key={eachService.key}>
      <main>
        <h2 data-testid="service_title">
          <Title title={eachService.title} />
        </h2>
        <section>
          {/* TODO: Bytte ut med riktig dynamisk verdi */}
          <span data-testid="service_slogan">"{eachService.slogan}" - </span>
          <span>CEO, Tjenesteweb</span>
        </section>
        <section>
          {/* TODO: Bytte ut med riktig dynamisk verdi */}
          <p data-testid="service_preamble">{eachService.preAmble}</p>
          {/* TODO: Bytte ut med riktig dynamisk verdi */}
          <h3 data-testid="service_content_title">
            {eachService.initialContent.title}
          </h3>
          {/* TODO: Bytte ut med riktig dynamisk verdi */}
          <p data-testid="service_content_text">
            {eachService.initialContent.text}
          </p>
          <article data-testid="service_text">
            {/* Her kommer tekst fra "text" laget i Ny */}
          </article>
        </section>
      </main>
      <aside>
        {/* TODO: Bytte ut Farge med riktig dynamisk verdi */}
        {/* Portable text how to: https://www.sanity.io/docs/presenting-block-text#234900ff90d0 */}
        <div data-testid="service_box" data-color="Farge">
          Boks design selectedColor: {eachService.box}
        </div>
      </aside>
    </div>
  ))
}
/* BRUKE MAP IGJEN FOR Å SKrIVE UT? */
