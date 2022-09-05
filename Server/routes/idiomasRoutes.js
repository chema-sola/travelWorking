import express from 'express'
import { getIdioma } from '../controllers/idiomasController.js'

export const router = express.Router()

router.get('/', getIdioma)
