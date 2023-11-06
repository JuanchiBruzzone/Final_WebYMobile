import express from 'express';
import * as ProposalsController from '../controllers/proposals.controllers';
import { authJwt } from '../middlewares/index';

export default (router: express.Router) => {
    router.get('/proposals', [authJwt.verifyToken, authJwt.isUser], ProposalsController.getProposals);
    router.get('/proposals/:id', [authJwt.verifyToken, authJwt.isUser], ProposalsController.getProposalById);
    router.post('/proposals', [authJwt.verifyToken, authJwt.isUser], ProposalsController.createProposal);
    router.delete('/proposals/:id', [authJwt.verifyToken, authJwt.isUser],  ProposalsController.deleteProposalById);
    router.put('/proposals/:id', [authJwt.verifyToken, authJwt.isUser], ProposalsController.updateProposalById);
}