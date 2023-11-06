import express from 'express';
import * as UsersController from '../controllers/users.controllers';
import { authJwt } from '../middlewares/index';

export default (router: express.Router) => {
    router.get('/users', [authJwt.verifyToken, authJwt.isAdmin], UsersController.getUsers);
    router.get('/users/:id', [authJwt.verifyToken, authJwt.isAdmin], UsersController.getUserById);
    router.get('/users/email/:email', [authJwt.verifyToken, authJwt.isAdmin], UsersController.getUserByEmail);
    router.post('/users', [authJwt.verifyToken, authJwt.isAdmin], UsersController.createUser);
    router.delete('/users/:id', [authJwt.verifyToken, authJwt.isAdmin], UsersController.deleteUserById);
    router.put('/users/:id', [authJwt.verifyToken, authJwt.isAdmin], UsersController.updateUserById);
}