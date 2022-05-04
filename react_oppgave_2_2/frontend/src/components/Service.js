// TODO: Denne egner seg for /tjenester/en-eller-annen-tjeneste

export default function Service() {
  return (
    <div>
      <main>
        <h2 data-testid="service_title">Title</h2>
        <section>
          {/* TODO: Bytte ut med riktig dynamisk verdi */}
          <span data-testid="service_slogan">"Slogan"</span>
          <span>CEO, Tjenesteweb</span>
        </section>
        <section>
          {/* TODO: Bytte ut med riktig dynamisk verdi */}
          <p data-testid="service_preamble">PreAmble</p>
          {/* TODO: Bytte ut med riktig dynamisk verdi */}
          <h3 data-testid="service_content_title">InitialContent Tittel</h3>
          {/* TODO: Bytte ut med riktig dynamisk verdi */}
          <p data-testid="service_content_text">InitialContent Text</p>
          <article data-testid="service_text">
            {/* Her kommer tekst fra "text" laget i Ny */}
          </article>
        </section>
      </main>
      <aside>
        {/* TODO: Bytte ut Farge med riktig dynamisk verdi */}
        <div data-testid="service_box" data-color="Farge">
          Boks design
        </div>
      </aside>
    </div>
  )
}
