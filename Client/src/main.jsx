import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//CSS
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'

//Pages
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import Ofertas from './pages/Ofertas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ofertas' element={<Ofertas />} />


        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

