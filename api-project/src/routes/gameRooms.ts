import express from 'express'
import { validacionToken } from '../middleware'

const router = express.Router()

// Crea una nueva sala de juego.
router.post('/rooms',validacionToken, (_req, _res) => {

})

// Obtiene información sobre una sala de juego específica.
router.get('/rooms/:id',validacionToken, (_req, _res) => {

})

// Actualiza la información de una sala de juego específica.
router.put('/rooms/:id',validacionToken, (_req, _res) => {

})

// Elimina una sala de juego específica.
router.delete('/rooms/:id',validacionToken, (_req, _res) => {

})

export default router
