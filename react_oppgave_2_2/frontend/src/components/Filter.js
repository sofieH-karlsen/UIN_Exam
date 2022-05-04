import { useState } from 'react'
import { services } from '../data/services'
import Card from './Card'

export default function Filter() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <>
    <input
        data-testid="search"
        id="search"
        name="search"
        type="search"
        placeholder="Søk etter tjenester"
        onChange={(event) => {setSearchTerm(event.target.value)}}
      />
        {services.filter((service) => {
          if (searchTerm == ""){
            return service
          } else if (service.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){

          }
        }).map((service) => (
            
              <Card
              key={service.key}
              title={service.title}
              preamble={service.preAmble}
              link={service.slug}
            />
          
        ))}
    </>
  );
}
