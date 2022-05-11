// TODO: Nødvendig props
import { useState, useEffect } from 'react'
import BullsEye from './Bullseye'
import Header from './Header'

export default function Game({ game, nextLvl, setLvl }) {
  // TODO: Legge til nødvendig logikk. Hvis nødvendig.
  const [points, setPoints] = useState(0)
  const [hidden, setHidden] = useState(true)

  const knapper = game.buttons
  const maxPoint = game.total

  const newLvl = () => {
    nextLvl()
    setPoints(0)
  }
  useEffect(() => {
    if (points >= maxPoint) {
      setHidden(false)
    } else {
      setHidden(true)
    }
  }, [maxPoint, points])

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
            setLvl={setLvl}
            open={hidden}
          />
        ))}
        {/* TODO: Kun vise denne knappen når en runde er ferdig */}
        <button
          className={
            hidden
              ? 'hidden'
              : 'col-span-4 w-full rounded-xl border-2 border-emerald-100 p-8 text-lg font-bold text-emerald-500 shadow-lg shadow-emerald-100'
          }
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
