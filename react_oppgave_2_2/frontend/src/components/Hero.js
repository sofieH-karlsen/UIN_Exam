import Sirkler from '../img/sirkler.png'

export default function Hero() {
  return (
    <section data-testid="hero" className="hero">
      <div className="leftHero">
        <cite data-testid="cite">
          «Vi tilbyr alle tjenester til alle mennesker over alt. Rett og slett
          best på tjenester.»
        </cite>
        <span>CEO, Tjenesteweb</span>
      </div>
      <div data-testid="circles">
        <img src={Sirkler} alt="circles" className="circles" />
      </div>
    </section>
  )
}
