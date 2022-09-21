import { useDispatch, useSelector } from 'react-redux'
import { trabajosApi } from '../helpers/fetch'
import {
  addNewJob,
  loadAllTrabajos,
  setActivo,
  setFinishLoading,
  setLoading,
  setSyncActivo,
  setUpdateTrabajo,
  onDeleteTrabajo,
} from '../store/trabajo'

export const useTrabajos = () => {
  const dispatch = useDispatch()
  const { trabajos, trabajoActive, isLoading } = useSelector((state) => state.trabajos)

  const startLoadAllNotes = async () => {
    dispatch(setLoading())
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
    dispatch(setLoading())
    try {
      const response = await trabajosApi(`/trabajo/${id}`)
      const { data } = await response.json()
      dispatch(setActivo(data))
    } catch (error) {
      dispatch(setFinishLoading())
      console.log('Error al cargar los datos')
      console.log(error)
    }
  }

  const setSyncActiveTrabajo = (id) => {
    dispatch(setLoading())
    dispatch(setSyncActivo(Number(id)))
  }

  const startCreateNewTrabajo = async (trabajo) => {
    try {
      // const response = await trabajosApi(`/trabajo`, trabajo, 'POST')
      const response = await fetch('http://localhost:4000/api/trabajo', {
        method: 'POST',
        body: trabajo,
      })
      const { data } = await response.json()
      dispatch(addNewJob(data))
      console.log(data)
    } catch (error) {
      console.log('Error al guardar')
      console.log(error)
    }
  }

  const startDeleteTrabajo = async (id) => {
    try {
      dispatch(onDeleteTrabajo(id))
    } catch (error) {
      console.log('Error al guardar')
      console.log(error)
    }
  }

  const startUpdateTrabajo = async (trabajo) => {
    try {
      dispatch(setLoading())
      const response = await trabajosApi(`/trabajo/${trabajo.id}`, trabajo, 'PUT')
      const { data } = await response.json()
      dispatch(setUpdateTrabajo(data))
      console.log(data)
    } catch (error) {
      dispatch(setFinishLoading())
      console.log('Error al actualizar')
      console.log(error)
    }
  }

  return {
    startLoadAllNotes,
    trabajos,
    trabajoActive,
    setActiveTrabajo,
    isLoading,
    startCreateNewTrabajo,
    startUpdateTrabajo,
    setSyncActiveTrabajo,
    startDeleteTrabajo,
  }
}
