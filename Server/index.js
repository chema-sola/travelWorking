import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { router as clientesRouter } from './routes/clientesRoutes.js'
import { router as idiomasRouter } from './routes/idiomasRoutes.js'
import { router as trabajoRoutes } from './routes/trabajoRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.use('/api/clientes', clientesRouter)
app.use('/api/idiomas', idiomasRouter)
app.use('/api/trabajo', trabajoRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo el el puerto ${PORT}`)
})
