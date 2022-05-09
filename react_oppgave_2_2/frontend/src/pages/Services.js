// TODO: Denne egner seg for /tjenester og /

import Filter from '../components/Filter'
import Title from '../components/Title'

export default function Services() {
  return (
    <main className="services">
      <h2 data-testid="title">
        <Title title="Alle tjenester" />
      </h2>
      <Filter />
    </main>
  )
}

/* TODO: Skal vi flytte inn noe mer fra Filter inn hit? */

/* TODO: Få filter til å virke */

/* TODO: Hvis ingen tjenester ved filtrering. Vis denne */

/* <p data-testid="empty">Ingen tjenester</p> */

/* </section> */
