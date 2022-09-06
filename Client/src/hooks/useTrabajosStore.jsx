import { useDispatch, useSelector } from 'react-redux'
import { trabajosApi } from '../helpers/fetch'

export const useTrabajos = () => {
  const dispatch = useDispatch()
  const { trabajos, trabajoActive } = useSelector((state) => state.trabajos)

  const startLoadAllNotes = async () => {
    try {
      const response = await trabajosApi('/trabajo')
      const data = await response.json()
      console.log(data)
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
