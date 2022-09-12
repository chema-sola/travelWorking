import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//CSS

import './index.css'
import './App.css'

//Pages
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import { Cartas } from '../src/Cartas/Cartas'
import Ofertadetalle from './Oferta/Ofertadetalle'
import Formulario from './pages/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Perfil } from './Perfil/Perfil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/ofertas' element={<Cartas />} />
            <Route path='/register' element={<Formulario />} />
            <Route path='/perfil/:id' element={<Perfil />} />
            <Route path='/ofertadetallada' element={<Ofertadetalle />} />

        </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
