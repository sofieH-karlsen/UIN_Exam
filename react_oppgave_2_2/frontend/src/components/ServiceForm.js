import { useState } from 'react'
import { hexColors } from '../data/services'

export default function ServiceForm({ onSubmit, error, success }) {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [slogan, setSlogan] = useState('')
  const [preAmble, setPreAmble] = useState('')
  const [box, setBox] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      title,
      slug,
      slogan,
      preAmble,
      box,
    })
  }
  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleSlugChange = (event) => {
    setSlug(event.target.value)
  }
  const handleSloganChange = (event) => {
    setSlogan(event.target.value)
  }
  const handlePreAmbleChange = (event) => {
    setPreAmble(event.target.value)
  }
  const handleBoxChange = (event) => {
    setBox(event.target.value)
  }

  /* TODO: Gjør det mulig å sende skjema med alt av verdier */

  return (
    <form data-testid="form" noValidate onSubmit={handleSubmit}>
      <label htmlFor="title">
        <span>Tittel*</span>
        <input
          data-testid="form_title"
          type="text"
          name="title"
          id="title"
          onChange={handleTitleChange}
          value={title}
        />
      </label>
      <label htmlFor="slug">
        <span>Slug*</span>
        <input
          data-testid="form_slug"
          type="text"
          name="slug"
          id="slug"
          onChange={handleSlugChange}
          value={slug}
        />
      </label>
      <label htmlFor="preAmble">
        <span>Ingress*</span>
        <input
          data-testid="form_preAmble"
          type="text"
          name="preAmble"
          id="preAmble"
          onChange={handlePreAmbleChange}
          value={preAmble}
        />
      </label>
      <label htmlFor="slogan">
        <span>Slogan*</span>
        <input
          data-testid="form_slogan"
          type="text"
          name="slogan"
          id="slogan"
          onChange={handleSloganChange}
          value={slogan}
        />
      </label>
      <label htmlFor="box">
        <span>Boks*</span>
        <select
          data-testid="form_box"
          name="box"
          id="box"
          onChange={handleBoxChange}
          value={box}
        >
          <option disabled value="Velg farge på boksen her">
            Velg farge på boksen her
          </option>
          {hexColors.map((hex) => (
            <option key={hex} value={hex}>
              {hex}
            </option>
          ))}
        </select>
      </label>
      <button data-testid="form_submit" type="submit">
        Lag ny tjeneste
      </button>
      {/* TODO: endre utseende på knapp? Ekstra */}
      {/* TODO: Vis riktig <p> avhengig av tilstanden */}
      {error ? <p data-testid="form_error">Fyll ut alle felter med *</p> : null}
      {success ? <p data-testid="form_success">Skjema sendt</p> : null}
    </form>
  )
}
