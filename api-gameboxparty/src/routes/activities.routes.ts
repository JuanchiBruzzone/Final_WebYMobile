import express from 'express';
import * as ActivitiesController from '../controllers/activities.controllers';
import { authJwt } from '../middlewares/index';

export default (router: express.Router) => {
    router.get('/activities', [authJwt.verifyToken, authJwt.isUser], ActivitiesController.getActivities);
    router.get('/activities/:id', [authJwt.verifyToken, authJwt.isUser], ActivitiesController.getActivityById);
    router.post('/activities', [authJwt.verifyToken, authJwt.isAdmin], ActivitiesController.createActivity);
    router.delete('/activities/:id', [authJwt.verifyToken, authJwt.isAdmin],  ActivitiesController.deleteActivityById);
    router.put('/activities/:id', [authJwt.verifyToken, authJwt.isAdmin], ActivitiesController.updateActivityById);
}
