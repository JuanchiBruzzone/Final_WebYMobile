import express from 'express';
import * as RoomsController from '../controllers/rooms.controllers';
import { authJwt } from '../middlewares/index';

export default (router: express.Router) => {
    router.post('/rooms', [authJwt.verifyToken, authJwt.isUser], RoomsController.createRoom);
    router.put('/rooms/:id', [authJwt.verifyToken, authJwt.isUser], RoomsController.changeStatusRoom);
}