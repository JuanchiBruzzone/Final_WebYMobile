import express from 'express';
import * as AuthController from '../controllers/authentication.controllers';

export default (router: express.Router) => {
    router.post('/auth/register', AuthController.register);
    router.post('/auth/login', AuthController.login)
}