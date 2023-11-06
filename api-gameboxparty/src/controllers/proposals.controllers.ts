import express from 'express';
import * as ProposalModel from '../models/proposals';

export const getProposals = async (req: express.Request, res: express.Response) => {
    try {
        const proposals = await ProposalModel.getProposals();
        res.status(200).json(proposals);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getProposalById = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Id is required' });
        }

        const proposal = await ProposalModel.getProposalById(id);

        if (!proposal) {
            return res.status(404).json({ message: 'Proposal not found' });
        }

        return res.status(200).json(proposal);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const createProposal = async (req: express.Request, res: express.Response) => {
    try {
        const { name, description, image } = req.body;

        if (!name || !description) {
            return res.status(400).json({ message: 'Name and description are required' });
        }

        const proposal = await ProposalModel.createProposal({
            name,
            description,
            image
        })

        return res.status(200).json(proposal);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteProposalById = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Id is required' });
        }

        const proposal = await ProposalModel.deleteProposalById(id);

        if (!proposal) {
            return res.status(404).json({ message: 'Proposal not found' });
        }

        return res.status(200).json(proposal);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const updateProposalById = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { name, description, image } = req.body;

        if (!id) {
            return res.status(400).json({ message: 'Id is required' });
        }

        const proposal = await ProposalModel.updateProposalById(id, {
            name,
            description,
            image
        });

        if (!proposal) {
            return res.status(404).json({ message: 'Proposal not found' });
        }

        return res.status(200).json(proposal);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}