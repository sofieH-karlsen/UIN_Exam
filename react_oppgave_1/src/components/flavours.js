import { useState } from 'react'
import Title from './Title.js'

const flavours = [
  { name: 'Jordbær', key: 'strawberry' },
  { name: 'Banan', key: 'banana' },
  { name: 'Lime', key: 'lime' },
  { name: 'Blåbær', key: 'blueberry' },
  { name: 'Sjokolade', key: 'chocolate' },
]

const nameList = flavours.map((option) => option.name)
const keyList = flavours.map((option) => option.key)
console.log(nameList)
console.log(keyList)

export default function Flavours() {
  const [css, setCss] = useState('')
  const [flavour, setFlavour] = useState('')

  // TO DO: Trigg funksjonen under ved endring i select

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
            <option data-testid="option" value={keyList[0]} key={keyList[0]}>
              {nameList[0]}
            </option>
            <option data-testid="option" value={keyList[1]} key={keyList[1]}>
              {nameList[1]}
            </option>
            <option data-testid="option" value={keyList[2]} key={keyList[2]}>
              {nameList[2]}
            </option>
            <option data-testid="option" value={keyList[3]} key={keyList[3]}>
              {nameList[3]}
            </option>
            <option data-testid="option" value={keyList[4]} key={keyList[4]}>
              {nameList[4]}
            </option>
          </select>
        </label>
      </div>
    </section>
  )
}
