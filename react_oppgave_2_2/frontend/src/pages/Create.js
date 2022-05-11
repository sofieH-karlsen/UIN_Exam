import { useState } from 'react'
import { createService } from '../data/createService'
import Title from '../components/Title'
import ServiceForm from '../components/ServiceForm'

export default function Create() {
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const onSubmit = async (data) => {
    setError(false)
    setSuccess(false)

    try {
      await createService(data)
      setSuccess(true)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <main className="createNewService">
      <h2 data-testid="title">
        <Title title="Lag ny tjeneste" />
      </h2>
      <div className="formQuote">
        <cite data-testid="cite">
          «Hvis vi ikke har en tjeneste, så lager vi en»
        </cite>
        <span>CEO, Tjenesteweb</span>
      </div>
      <ServiceForm onSubmit={onSubmit} error={error} success={success} />
    </main>
  )
}
