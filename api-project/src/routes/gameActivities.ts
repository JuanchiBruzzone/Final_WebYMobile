import express from 'express';
import { validacionToken } from '../middleware';

const router = express.Router();

// Crea una nueva actividad.
router.post('/activities',validacionToken, (_req, _res) => {
    
});

// Obtiene información sobre todas las actividades.
router.get('/activities',validacionToken, (_req, _res) => {

});

// Obtiene información sobre una actividad específica.
router.get('/activities/:id',validacionToken, (_req, _res) => {

});

// Actualiza la información de una actividad específica.
router.put('/activities/:id',validacionToken, (_req, _res) => {
    
});

// Elimina una actividad específica.
router.delete('/activities/:id',validacionToken, (_req, _res) => {
    
});

export default router;