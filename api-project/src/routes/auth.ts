import express from 'express'
import { validacionToken } from '../middleware'

const router = express.Router()

// Crea una nueva propuesta.
router.post('/auth/login', validacionToken, (_req, _res) => {

})

router.post('/auth/refresh-token',validacionToken, (_req, _res) => {

})

export default router
