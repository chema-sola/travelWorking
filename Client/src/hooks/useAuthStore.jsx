import { useDispatch, useSelector } from 'react-redux'

import { onCheking, onLogOut, onLogin, onActiveUser, onUpdateUser } from '../store/auth/authSlice'

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
    } catch (error) {
      console.log(error)
      dispatch(onLogOut())
    }
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

  return {
    status,
    user,
    startLogin,
    startGettingInfoProfile,
    activeUser,
    startUpdatingPerfil,
  }
}
