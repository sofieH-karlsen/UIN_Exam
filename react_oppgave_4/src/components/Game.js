// TODO: Nødvendig props
import BullsEye from './Bullseye'
import Header from './Header'

export default function Game({ game, nextLvl }) {
  // TODO: Legge til nødvendig logikk. Hvis nødvendig.

  return (
    <>
      <Header />
      <div data-testid="game" className="grid grid-cols-4 gap-6">
        {/* TODO: Må skrive ut antall knapper et spill skal vise */}
        {/* TODO: Må bruke riktig komponent og sende data som props */}
        <BullsEye />
        {/* TODO: Kun vise denne knappen når en runde er ferdig */}
        <button
          className="col-span-4 w-full rounded-xl border-2 border-emerald-100 p-8 text-lg font-bold text-emerald-500 shadow-lg shadow-emerald-100"
          type="button"
          data-testid="next"
          onClick={nextLvl}
        >
          Neste runde
        </button>
      </div>
    </>
  )
}
