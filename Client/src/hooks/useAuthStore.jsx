import { useDispatch, useSelector } from 'react-redux'

import { onCheking, onLogOut, onLogin, onActiveUser, onLoadMisTrabajos } from '../store/auth/authSlice'

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

      localStorage.setItem('user', JSON.stringify({ email: email, password: password }))
    } catch (error) {
      console.log(error)
      dispatch(onLogOut())
    }
  }

  const logOut = () => {
    dispatch(onLogOut())
    localStorage.removeItem('user')
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

  return {
    status,
    user,
    startLogin,
    startGettingInfoProfile,
    activeUser,
    logOut,
    startLoadAllMisTrabajos,
  }
}
