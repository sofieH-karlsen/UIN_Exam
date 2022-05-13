import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createService } from '../data/createService'
import Title from '../components/Title'
import ServiceForm from '../components/ServiceForm'

export default function Create() {
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    setLoading(true)
    setError(false)
    setSuccess(false)
    // handleValidate()

    try {
      await createService(data)
      setSuccess(true)
      setTimeout(() => {
        navigate('/tjenester')
      }, 500)
      /* Kilde: https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks */
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="createNewService">
      <h2 data-testid="title">
        <Title title="Lag ny tjeneste" />
      </h2>
      <div className="quote">
        <cite data-testid="cite">
          «Hvis vi ikke har en tjeneste, så lager vi en»
        </cite>
        <span>CEO, Tjenesteweb</span>
      </div>
      <ServiceForm
        onSubmit={onSubmit}
        loading={loading}
        error={error}
        success={success}
      />
    </main>
  )
}
