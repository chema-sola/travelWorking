import { useDispatch, useSelector } from 'react-redux'

import {
  onCheking,
  onLogOut,
  onLogin,
  onActiveUser,
  onUpdateUser,
  onLoadMisTrabajos,
  deleteOneTrabajoMio,
  onAddMisInscripciones,
} from '../store/auth/authSlice'

import { trabajosApi } from '../helpers/fetch'

export const useAuthStore = () => {
  const { status, user, activeUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const startLogin = async ({ email, password }) => {
    try {
      dispatch(onCheking())
      const resp = await trabajosApi('/clientes/login', { email, password }, 'POST')
      const { data } = await resp.json()
      dispatch(onLogin(data))

      localStorage.setItem('user', JSON.stringify({ email: email, password: password, id: data.id }))
    } catch (error) {
      console.log(error)
      dispatch(onLogOut())
    }
  }

  const logOut = () => {
    dispatch(onLogOut())
    localStorage.removeItem('user')
  }

  const startUpdatingPerfil = async (user) => {
    try {
      const resp = await trabajosApi(`/clientes/${user.id}`, user, 'PUT')
      const { data } = await resp.json()
      dispatch(onUpdateUser(data))
    } catch (error) {
      console.log(error)
    }
  }

  const startGettingInfoProfile = async (id) => {
    try {
      const resp = await trabajosApi(`/clientes/${id}`)
      const { data } = await resp.json()
      dispatch(onActiveUser(data))
    } catch (error) {
      console.log(error)
    }
  }

  const startLoadAllMisTrabajos = async (id) => {
    try {
      const response = await trabajosApi(`/trabajo/misTrabajos/${id}`)
      const { data } = await response.json()
      dispatch(onLoadMisTrabajos(data))
    } catch (error) {
      console.log('Error al cargar los datos')
      console.log(error)
    }
  }

  const startInscribirseOferta = async (trabajoId, clienteId) => {
    try {
      const response = await trabajosApi(`/trabajo/${trabajoId}/cliente/${clienteId}`, {}, 'POST')
      const { data } = await response.json()
      dispatch(onAddMisInscripciones(data.Trabajo))
    } catch (error) {
      console.log('Error al cargar los datos')
      console.log(error)
    }
  }

  const startDeletingOneTrabajoMio = async (id) => {
    try {
      await trabajosApi(`/trabajo/${id}`, { id }, 'DELETE')
      dispatch(deleteOneTrabajoMio(id))
    } catch (error) {
      console.log('Error al cargar los datos')
      console.log(error)
    }
  }

  return {
    status,
    user,
    startLogin,
    startGettingInfoProfile,
    activeUser,
    startUpdatingPerfil,
    logOut,
    startLoadAllMisTrabajos,
    startDeletingOneTrabajoMio,
    startInscribirseOferta,
  }
}
