import { useAuthStore } from '../hooks/useAuthStore'
import { Candidatura } from './components/Candidatura'
import { Container } from 'react-bootstrap'

import './candidaturas.css'

export const Candidaturas = () => {
  const { user } = useAuthStore()
  const { candidaturas } = user
  return (
    <Container style={{ marginTop: '3rem', marginBottom: '3rem' }}>
      <h1>Mis candidaturas</h1>
      <div className='candidaturas'>
        {candidaturas.map((candidatura) => (
          <Candidatura key={candidatura.id} candidatura={candidatura} />
        ))}
      </div>
    </Container>
  )
}
