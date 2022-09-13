import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter } from 'react-router-dom'

//Pages
import App from './App'

//CSS

import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <AppRouter /> */}
        <App />
        {/* <Routes> */}
        {/* <Route path='/' element={<App />}> */}
        {/* <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/ofertas' element={<Cartas />} />
            <Route path='/register' element={<Formulario />} />
            <Route path='/perfil/:id' element={<Perfil />} />
            <Route path='/candidaturas/:id' element={<Candidaturas />} />
            <Route path='/ofertadetallada/:id' element={<Ofertadetalle />} />
            <Route path='*' element={<Home />} /> */}
        {/* </Route> */}
        {/* </Routes> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
