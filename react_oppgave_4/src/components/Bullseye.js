// TODO: Nødvendig props
// TODO: Dynamisk verdi må byttes ut

export default function BullsEye({ color, point }) {
  // TODO: Legge til nødvendig logikk. Hvis nødvendig.

  return (
    <button
      type="button"
      className={`${color} flex h-36 w-36 items-center justify-center p-8 shadow shadow-slate-200`}
      data-color={color}
      data-point={point}
      data-testid="button"
    >
      <span className="pointer-events-none block h-12 w-12 rounded-full" />
    </button>
  )
}
