// TODO: Nødvendig props
import { useState } from 'react'
import BullsEye from './Bullseye'
import Header from './Header'

export default function Game({ game, nextLvl }) {
  // TODO: Legge til nødvendig logikk. Hvis nødvendig.
  const [points, setPoints] = useState(0)
  const knapper = game.buttons

  const maxPoint = game.total

  const newLvl = () => {
    nextLvl()
    setPoints(0)
  }

  return (
    <>
      <Header max={maxPoint} points={points} />
      <div data-testid="game" className="grid grid-cols-4 gap-6">
        {/* TODO: Må skrive ut antall knapper et spill skal vise */}
        {/* TODO: Må bruke riktig komponent og sende data som props */}
        {knapper.map((button) => (
          <BullsEye
            color={button.color}
            point={button.point}
            setPoints={setPoints}
          />
        ))}
        {/* TODO: Kun vise denne knappen når en runde er ferdig */}
        <button
          className="col-span-4 w-full rounded-xl border-2 border-emerald-100 p-8 text-lg font-bold text-emerald-500 shadow-lg shadow-emerald-100"
          type="button"
          data-testid="next"
          onClick={newLvl}
        >
          Neste runde
        </button>
      </div>
    </>
  )
}
