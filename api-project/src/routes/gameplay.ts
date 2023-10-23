import express from 'express';
import { validacionToken } from '../middleware';

const router = express.Router();

// Empieza un juego en una sala de juego especifica.
router.post('/rooms/:id/start-game',validacionToken, (_req, _res) => {
    
});

// Guarda el voto de un usuario en una actividad específica.
router.post('/rooms/:id/proposals/:proposalId/vote',validacionToken, (_req, _res) => {
    
});

// Obtiene los resultados de una sala de juego específica.
router.get('/rooms/:id/results',validacionToken, (_req, _res) => {
    
});

export default router;