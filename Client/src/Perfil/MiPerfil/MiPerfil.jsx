export const MiPerfil = ({ user }) => {
  return <div>{user?.id ? <pre>{JSON.stringify(user, null, 3)}</pre> : <p>Loading...</p>}</div>
}
