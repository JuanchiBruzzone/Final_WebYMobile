import express from 'express';
import { validacionToken } from '../middleware';

const router = express.Router();

// Crea una nueva propuesta.
router.post('/proposals',validacionToken, (_req, _res) => {
    
});

// Obtiene información sobre una propuesta específica.
router.get('/proposals/:id',validacionToken, (_req, _res) => {

});

// Actualiza la información de una propuesta específica.
router.put('/proposals/:id',validacionToken, (_req, _res) => {
    
});

// Elimina una propuesta específica.
router.delete('/proposals/:id',validacionToken, (_req, _res) => {
    
});

export default router;