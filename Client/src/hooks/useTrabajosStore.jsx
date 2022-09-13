import { useDispatch, useSelector } from 'react-redux'
import { trabajosApi } from '../helpers/fetch'
import { onLoadMisTrabajos } from '../store/auth/authSlice'
import { loadAllTrabajos, setActivo } from '../store/trabajo'

export const useTrabajos = () => {
  const dispatch = useDispatch()
  const { trabajos, trabajoActive, isLoading } = useSelector((state) => state.trabajos)

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

  const setActiveTrabajo = async (id) => {
    try {
      const response = await trabajosApi(`/trabajo/${id}`)
      const { data } = await response.json()
      dispatch(setActivo(data))
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
    setActiveTrabajo,
    isLoading,
  }
}
