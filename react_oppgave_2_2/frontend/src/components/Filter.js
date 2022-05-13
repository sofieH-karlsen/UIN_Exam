import { useState } from 'react'
import Card from './Card'


export default function Filter({ services }) {
  const [searchTerm, setSearchTerm] = useState('')
  //TODO: unique key

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
            setSearchTerm(event?.target.value)
          }}
        />
      </label>
      <section data-testid="services" className="ofCards">
        {services?.filter(() => {
            if (searchTerm === '') {
              return services
            }
            if (
              services?.title?.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return services?.title
            } else {
              console.log('no found')
            } 
          })
          .map((services) => (
            <Card 
            services={services}
            />
          ))
          }
        {/* TODO: Hvis ingen tjenester ved filtrering. Vis denne */
        /* <p data-testid="empty">Ingen tjenester</p> */}
      </section>
    </>
  )
}

// KILDE filter: https://www.youtube.com/watch?v=mZvKPtH9Fzo



// annen ide
// export default function Filter( { services, getServices }) {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [loading, setLoading] = useState(null)
//   const [services, filterServices] = useState([])
  
//   //TODO: unique key
//   useEffect(
//   const handleFilter(services, getServices) => 
//     {searchTerm === ''
//     ) ? getServices : }
//   setSearchTerm
//   {setSearchTerm = (event?.target.value)
//     return () => {
//       second
//     }
//   }, [filterServices])
  