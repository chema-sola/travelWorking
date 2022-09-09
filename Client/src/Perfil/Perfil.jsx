import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { MiPerfil } from './MiPerfil/MiPerfil'
import { PerfilOtraPersona } from './PerfilOtraPersona/PerfilOtraPersona'

export const Perfil = () => {
  const { id: idUrl } = useParams()
  const { user } = useSelector((state) => state.auth)

  return <>{Number(idUrl) === Number(user.id) ? <MiPerfil user={user} /> : <PerfilOtraPersona id={idUrl} />}</>
}
