import { useState } from 'react'
import { services } from '../data/services'
import Card from './Card'

export default function Filter() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <>
      <label htmlFor="search">
        <input
          data-testid="search"
          id="search"
          name="search"
          type="search"
          placeholder="Søk etter tjenester her"
          onChange={(event) => {
            setSearchTerm(event.target.value)
          }}
        />
      </label>
      <section className="ofCards">
        {services
          .filter((service) => {
            if (searchTerm === '') {
              return services
            }
            if (
              service.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return service.title
            } else {
              console.log('no found')
            }
          })
          .map((service) => (
            <Card
              key={service.key}
              title={service.title}
              preamble={service.preAmble}
              link={service.slug}
            />
          ))
          }
        {/*<p data-testid="empty">Ingen tjenester</p>*/}
      </section>
    </>
  )
}

// KILDE: https://www.youtube.com/watch?v=mZvKPtH9Fzo
