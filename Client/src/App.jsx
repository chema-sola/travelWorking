import { useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import UseContext from './UseContext'
import traductor from './translate'
import { Menu } from './Menu'
import { useEffect } from 'react'
import { useTrabajos } from './hooks/useTrabajosStore'

function App() {
  const [idioma, setIdioma] = useState(0)
  const traduce = (etiqueta) => traductor[etiqueta][idioma]
  const Translate = useContext(UseContext)

  const { startLoadAllNotes } = useTrabajos()
  useEffect(() => {
    startLoadAllNotes()
  }, [])

  return (
    <UseContext.Provider value={{ traduce, idioma }}>
      <Menu idioma={idioma} />
      <Outlet />
    </UseContext.Provider>
  )
}

export default App
