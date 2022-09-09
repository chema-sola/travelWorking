import { useDispatch, useSelector } from 'react-redux'
import { trabajosApi } from '../helpers/fetch'
import { loadAllTrabajos } from '../store/trabajo'

export const useTrabajos = () => {
  const dispatch = useDispatch()
  const { trabajos, trabajoActive } = useSelector((state) => state.trabajos)

  const startLoadAllNotes = async () => {
    try {
      const response = await trabajosApi('/trabajo')
      const { data } = await response.json()
      dispatch(loadAllTrabajos(data))
    } catch (error) {
      console.log('Error al cargar los datos')
      console.log(error)
    }
  }

  const startLoadAllTrabajosInscritos = async (clientId) => {
    try {
      const response = await trabajosApi(`/trabajo/${clientId}/candidaturas`)
      const { data } = await response.json()
    } catch (error) {
      console.log('Error al cargar los datos')
      console.log(error)
    }
  }

  return {
    startLoadAllNotes,
    trabajos,
    trabajoActive,
  }
}
