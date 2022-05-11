/* eslint-disable no-plusplus */
import { useEffect, useState } from 'react'
import Game from './components/Game'
// TODO: createGame har en TODO som må ferdigstilles
import { createGame } from './components/start'

export default function App() {
  const [game, setGame] = useState(createGame(0))
  const [lvl, setLvl] = useState(0)

  // TODO: Legge til nødvendig logikk. Hvis nødvendig.
  const increaseLvl = () => {
    setLvl((lv) => lv + 1)
  }

  useEffect(() => {
    // TODO: 0 må byttes ut med noe dynamisk
    setGame(createGame(lvl))
  }, [lvl])

  return <Game game={game} nextLvl={increaseLvl} />
}
