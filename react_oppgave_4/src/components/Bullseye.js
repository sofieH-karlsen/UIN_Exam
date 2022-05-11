// TODO: Nødvendig props
// TODO: Dynamisk verdi må byttes ut

export default function BullsEye({ color, point, setPoints, setLvl, open }) {
  // TODO: Legge til nødvendig logikk. Hvis nødvendig.

  const gameOver = () => {
    setLvl(0)
    setPoints(0)
  }

  const increasePoints = () => {
    if (point < 0) {
      gameOver()
    } else {
      setPoints((p) => p + point)
    }
  }

  return (
    <button
      type="button"
      className={
        open
          ? `open ${color} flex h-36 w-36 items-center justify-center p-8 shadow shadow-slate-200`
          : null
      }
      data-color={color}
      data-point={point}
      data-testid="button"
      onClick={increasePoints}
    >
      <span className="pointer-events-none block h-12 w-12 rounded-full" />
    </button>
  )
}
