import { useDispatch, useSelector } from 'react-redux'

import { onCheking, onLogOut, onLogin } from '../store/auth/authSlice'

import { trabajosApi } from '../helpers/fetch'

export const useAuthStore = () => {
  const { status, user } = useSelector((state) => state.auth)
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

  return {
    status,
    user,
    startLogin,
  }
}
