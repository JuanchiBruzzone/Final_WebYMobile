import express from 'express'
import * as gameActivity from '../services/gameActivitiesService'

const router = express.Router()

// Crea una nueva actividad.
router.post('/activities', (req, res) => {
  res.send(gameActivity.addActivity(req.body.title, req.body.description, req.body.image))
})

// Obtiene información sobre todas las actividades.
router.get('/activities', (_req, res) => {
  res.send(gameActivity.getActivities())
})

// Obtiene información sobre una actividad específica.
router.get('/activities/:id', (req, res) => {
  res.send(gameActivity.getActivity(req.params.id ?? 404))
})

// Actualiza la información de una actividad específica.
router.put('/activities/:id', (req, res) => {
  res.send(gameActivity.updateActivity(req.params.id, req.body.title, req.body.description, req.body.image))
})

// Elimina una actividad específica.
router.delete('/activities/:id', (req, res) => {
  res.send(gameActivity.deleteActivity(req.params.id))
})

export default router
