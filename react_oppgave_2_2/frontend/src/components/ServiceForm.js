import { useState } from 'react'
import { hexColors } from '../data/services'

export default function ServiceForm({ onSubmit, loading, error, success }) {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [slogan, setSlogan] = useState('')
  const [preamble, setPreAmble] = useState('')
  const [box, setBox] = useState('')
  // const [formValues, setFormValues] = useState({})

  /* Validate kilde: https://upmostly.com/tutorials/form-validation-using-custom-react-hooks */
  // const handleValidate = () => {
  /*  
    {*title} = unik
    slug.toLowerCase() +++, unik og matcher tittel?
    [slogan.length]>10 Characters
    [preamble]>15char
    [slogan]>
    boks er valgt 
    double check if validated by sanity?
  // }
   TODO: VALIDATION*/

  const handleSubmit = (event) => {
    event.preventDefault()
    // handleValidate(error, success)
    onSubmit({
      title,
      slug,
      preamble,
      slogan,
      box,
    })
  }
  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleSlugChange = (event) => {
    setSlug(event.target.value)
  }
  const handlePreAmbleChange = (event) => {
    setPreAmble(event.target.value)
  }
  const handleSloganChange = (event) => {
    setSlogan(event.target.value)
  }
  const handleBoxChange = (event) => {
    setBox(event.target.value)
  }

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
          value={preamble}
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
        {loading ? 'Lagres...' : 'Lag ny tjeneste'}
      </button>
      {/* TODO: endre utseende på knapp? Ekstra */}
      {/* TODO: Vis riktig <p> avhengig av tilstanden VALIDATE */}
      {error ? <p data-testid="form_error">Fyll ut alle felter med *</p> : null}
      {success ? <p data-testid="form_success">Skjema sendt</p> : null}
    </form>
  )
}
