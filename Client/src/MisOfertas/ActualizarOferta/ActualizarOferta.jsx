import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useTrabajos } from '../../hooks'

import { ActualizarOfertaFormulario } from './Components'

import 'react-quill/dist/quill.snow.css'

export const ActualizarOferta = () => {
  const { trabajoActive, isLoading, setActiveTrabajo, setSyncActiveTrabajo } = useTrabajos()
  const { id } = useParams()

  useEffect(() => {
    setSyncActiveTrabajo(id)
  }, [id])

  return (
    <>{trabajoActive === null ? <p>Loading...</p> : <ActualizarOfertaFormulario trabajoActive={trabajoActive[0]} />}</>
  )
}
