/* eslint-disable no-plusplus */
import { useEffect, useState } from 'react'
import Game from './components/Game'
// TODO: createGame har en TODO som må ferdigstilles
import { createGame } from './components/start'

export default function App() {
  const [game, setGame] = useState(null)

  // TODO: Legge til nødvendig logikk. Hvis nødvendig.
  const lvl = 0

  useEffect(() => {
    // TODO: 0 må byttes ut med noe dynamisk
    setGame(createGame(lvl))
  }, [])

  console.log(game)

  return <Game game={game} />
}
