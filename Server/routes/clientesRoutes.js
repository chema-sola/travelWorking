import express from 'express'
import { crearCuenta, getClienteById, loginCliente, updateCuenta } from '../controllers/clientesController.js'

export const router = express.Router()

router.get('/:id', getClienteById)
router.post('/login', loginCliente)
router.post('/create', crearCuenta)
router.put('/:id', updateCuenta)
