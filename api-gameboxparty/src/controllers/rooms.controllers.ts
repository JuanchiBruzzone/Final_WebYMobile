import express from 'express';
import * as RoomModel from '../models/rooms';

export const createRoom = async (req: express.Request, res: express.Response) => {
    try {
        const { name, proposalId } = req.body;

        if (!name || !proposalId) {
            return res.status(400).json({ message: 'Name and proposalId are required' });
        }

        const room = await RoomModel.createRoom({
            name,
            proposal: proposalId,
            hostedBy: req.params.userId
        })

        return res.status(200).json(room).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const changeStatusRoom = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!id || !status) {
            return res.status(400).json({ message: 'roomId is required' });
        }

        if(status !== 'running' && status !== 'finished') {
            return res.status(400).json({ message: 'status must be running or finished' });
        }

        const room = await RoomModel.updateRoomById(id, {
            state: status
        });      

        return res.status(200).json(room).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}