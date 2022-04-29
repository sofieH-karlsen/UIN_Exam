import { useState } from 'react'
import Title from './Title.js'

const options = [
  { name: 'Jordbær', key: 'strawberry' },
  { name: 'Banan', key: 'banana' },
  { name: 'Lime', key: 'lime' },
  { name: 'Blåbær', key: 'blueberry' },
  { name: 'Sjokolade', key: 'chocolate' },
]

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
          <select
            defaultValue="chocolate"
            id="flavour"
            data-testid="flavour"
            onChange={handleFlavourChange}
            /* Inspo: https://www.geeksforgeeks.org/how-to-change-a-selects-options-based-on-another-dropdown-using-react/ */
          >
            {options.map((option) => (
              <option value={option.key} key={option.key}>
                {option.name}
                {/* kode fra: https://www.pluralsight.com/guides/how-to-get-selected-value-from-a-mapped-select-input-in-react */}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  )
}
