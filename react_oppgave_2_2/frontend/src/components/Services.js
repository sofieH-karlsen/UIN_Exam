// TODO: Denne egner seg for /tjenester og /

import Filter from './Filter'

export default function Services() {
  return (
    <main className="services">
      <h2 data-testid="title">Alle tjenester</h2>
      <Filter />
    </main>
  )
}

{
  /* TODO: Få filter til å virke */
}
{
  /*       
      <label htmlFor="search">
        Søk:
        <input
          data-testid="search"
          id="search"
          name="search"
          type="search"
          placeholder="Søk etter tjenester"
          //onChange={(event) => {setSearchTerm(event.target.value)}}
        /> */
}

{
  /* </label>
        <section data-testid="services">
        {/* TODO: Bruk .map til å skrive ut tjenester CHECK */
}
{
  /*{services.map((service) => (
          <Card
            key={service.key}
            title={service.title}
            preamble={service.preAmble}
            link={service.slug}
        />
        )) */
}
{
  /* TODO: Hvis ingen tjenester ved filtrering. Vis denne */
}
{
  /* <p data-testid="empty">Ingen tjenester</p> */
}
{
  /* </section> */
}
