import express from 'express'
import {
  createTrabajo,
  deleteTrabajo,
  getITrabajoById,
  getTrabajos,
  getTrabajosInscritos,
  inscribirteTrabajo,
  updateTrabajo,
  getTrabajosCreadosPorMi,
  getClientesInscritoEnMiOferta,
} from '../controllers/trabajoController.js'

export const router = express.Router()

router.get('/', getTrabajos)
router.get('/:id', getITrabajoById)
router.get('/misTrabajos/:id', getTrabajosCreadosPorMi)
router.get('/:clienteid/candidaturas', getTrabajosInscritos)
router.get('/miTrabajo/:id/clientes', getClientesInscritoEnMiOferta)
router.post('/', createTrabajo)
router.post('/:trabajoid/cliente/:clienteid', inscribirteTrabajo)
router.put('/:id', updateTrabajo)
router.delete('/:id', deleteTrabajo)
