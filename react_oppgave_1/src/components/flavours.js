import Title from './Title.js'
import { useState } from 'react'

const flavour = [
  { name: 'jordbær', key: 'strawberry' },
  { name: 'banan', key: 'banana' },
  { name: 'lime', key: 'lime' },
  { name: 'blåbær', key: 'blueberry' },
  { name: 'sjokolade', key: 'chocolate' },
]

const optionsList = flavour.map((option) => option.key);

console.log(optionsList)


export default function Flavours() {
  const [css, setCss] = useState('')
  const [flavour, setFlavour] = useState('')

  //TO DO: Trigg funksjonen under ved endring i select
  const handleFlavourChange = (event) => {
    const { value } = event.target
    // TO DO: Gjør nødvendig endring slik at tittel blir oppdatert med verdien valgt i select
    setFlavour({ value })

    // #### DO NOT CHANGE -- Ikke gjør endringer på koden under
    const cssFlavour = getComputedStyle(
      document.documentElement
    ).getPropertyValue(`--${value}`)
    const cssBackground = getComputedStyle(
      document.documentElement
    ).getPropertyValue(`--bg-${value}`)
    document.documentElement.style.setProperty('--flavour', `${cssFlavour}`)
    document.documentElement.style.setProperty('--bg', `${cssBackground}`)
    setCss(value)
    // #### DO NOT CHANGE END
  }

  return (
    <section id="options" data-testid="options">
      <Title />
      <div className="option" data-testid="flavours" id="flavours">
        <label htmlFor="flavour">
          <select defaultValue="chocolate" id="flavour" data-testid="flavour">
            {/* TODO: Lag statisk liste med verdiene under. Bruk .map og key. Alle verdiene i option må være med 
                  .MAP & KEY
                  
                  ER VANILLA EN OPTION?
                  <option data-testid="option" value="strawberry">
                     Jordbær
                  </option>
                  */}
            <option data-testid="option" value="strawberry">
              Jordbær
            </option>
            <option data-testid="option" value="banana">
              Banan
            </option>
            <option data-testid="option" value="lime">
              Lime
            </option>
            <option data-testid="option" value="blueberry">
              Blåbær
            </option>
            <option data-testid="option" value="chocolate">
              Sjokolade
            </option>
          </select>
        </label>
      </div>
    </section>
  )
}
