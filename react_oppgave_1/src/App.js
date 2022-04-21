import { useState } from 'react'
import Layout from './components/Layout'

export default function App() {
  // TODO: Gjør nødvendige endringer slik at bakgrunnen på isen er chocolate når applikasjonen starter
  const [css, setCss] = useState('')
  const [flavour, setFlavour] = useState('')

  
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

  // TODO: Gjør om til komponenter. HINT: Se på testid navnene som matcher krav til komponenter
  return (
    <>
      <Layout css={css} />
    </>
  )
}
