import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//CSS
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'
import './App.css'

//Pages
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import { Cartas } from '../src/Cartas/Cartas'
import Ofertadetalle from './Oferta/Ofertadetalle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/ofertas' element={<Cartas />} />
          <Route path='/ofertadetallada' element={<Ofertadetalle />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
