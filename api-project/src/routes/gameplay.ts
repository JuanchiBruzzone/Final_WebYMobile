import express from 'express';

const router = express.Router();

// Empieza un juego en una sala de juego especifica.
router.post('/rooms/:id/start-game', (_req, _res) => {
    
});

// Guarda el voto de un usuario en una actividad específica.
router.post('/rooms/:id/proposals/:proposalId/vote', (_req, _res) => {
    
});

// Obtiene los resultados de una sala de juego específica.
router.get('/rooms/:id/results', (_req, _res) => {
    
});

export default router;