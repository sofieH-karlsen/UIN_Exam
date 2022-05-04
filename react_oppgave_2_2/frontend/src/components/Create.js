import { hexColors } from '../data/services'

// TODO: Denne egner seg for /ny

export default function Create() {
  return (
    <main>
      <h2 data-testid="title">Ny tjeneste</h2>
      {/* TODO: Gjør det mulig å sende skjema med alt av verdier */}
      <form data-testid="form" noValidate>
        <label htmlFor="title">
          <span>Tittel*</span>
          <input data-testid="form_title" type="text" name="title" id="title" />
        </label>
        <label htmlFor="slug">
          <span>Slug*</span>
          <input data-testid="form_slug" type="text" name="slug" id="slug" />
        </label>
        <label htmlFor="preAmble">
          <span>Ingress*</span>
          <input
            data-testid="form_preAmble"
            type="text"
            name="preAmble"
            id="preAmble"
          />
        </label>
        <label htmlFor="slogan">
          <span>Slogan*</span>
          <input
            data-testid="form_slogan"
            type="text"
            name="slogan"
            id="slogan"
          />
        </label>
        <label htmlFor="box">
          <span>Farge på boks*</span>
          <select data-testid="form_box" name="box" id="box">
            <option disabled value="">
              Velg hex-farge
            </option>
            {hexColors.map((hex) => (
              <option key={hex} value={hex}>
                {hex}
              </option>
            ))}
          </select>
        </label>
        <button data-testid="form_submit" type="submit">
          Lag tjeneste
        </button>
        {/* TODO: Vis riktig p avhengig av tilstanden */}
        <p data-testid="form_error">Fyll ut alle felter med *</p>
        <p data-testid="form_success">Skjema sendt</p>
      </form>
    </main>
  )
}
