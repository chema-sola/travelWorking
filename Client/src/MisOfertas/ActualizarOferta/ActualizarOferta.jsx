import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useTrabajos } from '../../hooks'

import { ActualizarOfertaFormulario } from './Components'

import 'react-quill/dist/quill.snow.css'

export const ActualizarOferta = () => {
  const { trabajoActive, isLoading, setActiveTrabajo } = useTrabajos()
  const { id } = useParams()

  useEffect(() => {
    setActiveTrabajo(id)
  }, [id])
  return <>{isLoading ? <p>Loading...</p> : <ActualizarOfertaFormulario trabajoActive={trabajoActive[0]} />}</>
}
