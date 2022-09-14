import { useState } from 'react'
import UseContext from './UseContext'
import traductor from './translate'
import { Menu } from './Menu'
import { useEffect } from 'react'
import { useTrabajos } from './hooks/useTrabajosStore'
import Footer from './pages/Footer'

import 'react-image-gallery/styles/css/image-gallery.css'
import { useAuthStore } from './hooks/useAuthStore'
import { AppRouter } from './router/AppRouter'

function App() {
  const [idioma, setIdioma] = useState(0)
  const traduce = (etiqueta) => traductor[etiqueta][idioma]
  const { startLogin, startLoadAllMisTrabajos } = useAuthStore()

  const { startLoadAllNotes } = useTrabajos()
  useEffect(() => {
    startLoadAllNotes()
    if (localStorage.getItem('user')) {
      startLogin(JSON.parse(localStorage.getItem('user')))
      startLoadAllMisTrabajos(JSON.parse(localStorage.getItem('user')).id)
    }
  }, [localStorage.getItem('user')])

  return (
    <UseContext.Provider value={{ traduce, idioma }}>
      <Menu idioma={idioma} />
      {/* <Outlet /> */}
      <AppRouter />

      <Footer />
    </UseContext.Provider>
  )
}

export default App
