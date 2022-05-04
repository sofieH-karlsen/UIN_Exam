import { React, useState } from 'react'
import {services} from '../data/services'

export default function Filter() {
    const [searchTerm, setSearchTerm] = useState('')
  return (
    <input
          data-testid="search"
          id="search"
          name="search"
          type="search"
          placeholder="Søk etter tjenester"
          onChange={event => {setSearchterm(event.target.value)}}
        />
        (services.filter().map((val, key) => {
            return (
                <div className="service" key={key}>
                <p>{val.id}</p>
                </div>
            )
        }); 
  );
}
