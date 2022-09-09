import React from 'react'
import { useEffect } from 'react'
import { useAuthStore } from '../../hooks'

export const PerfilOtraPersona = ({ id }) => {
  const { activeUser, startGettingInfoProfile } = useAuthStore()
  useEffect(() => {
    startGettingInfoProfile(id)
  }, [id])

  return <div>{activeUser?.id ? <pre>{JSON.stringify(activeUser, null, 3)}</pre> : <p>Loading...</p>}</div>
}
