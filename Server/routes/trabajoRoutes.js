import express from 'express'
import {
  createTrabajo,
  deleteTrabajo,
  getITrabajoById,
  getTrabajos,
  inscribirteTrabajo,
  updateTrabajo,
} from '../controllers/trabajoController.js'

export const router = express.Router()

router.get('/', getTrabajos)
router.get('/:id', getITrabajoById)
router.post('/', createTrabajo)
router.post('/:trabajoid/cliente/:clienteid', inscribirteTrabajo)
router.put('/:id', updateTrabajo)
router.delete('/:id', deleteTrabajo)
