import { useState } from 'react'
import Card from './Card'

export default function Filter({ services }) {
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
      <section data-testid="services" className="ofCards">
        {services?.filter(() => {
            if (searchTerm === '') {
              return services
            }
            if (
              services.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return services.title
            } else {
              console.log('no found')
            }
          })
          .map((services) => (
            <Card services={services}
            />
          ))
          }
        {/*<p data-testid="empty">Ingen tjenester</p>*/}
      </section>
    </>
  )
}

// KILDE: https://www.youtube.com/watch?v=mZvKPtH9Fzo
