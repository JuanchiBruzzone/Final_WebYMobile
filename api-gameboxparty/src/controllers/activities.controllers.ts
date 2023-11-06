import express from 'express';
import * as ActivityModel from '../models/activities';

export const getActivities = async (req: express.Request, res: express.Response) => {
    try {
        const activities = await ActivityModel.getActivities();
        return res.status(200).json(activities).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getActivityById = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Id is required' });
        }

        const activity = await ActivityModel.getActivityById(id);

        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }

        return res.status(200).json(activity).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const createActivity = async (req: express.Request, res: express.Response) => {
    try {
        const { name, description, image } = req.body;

        if (!name || !description) {
            return res.status(400).json({ message: 'Name and description are required' });
        }

        const activity = await ActivityModel.createActivity({
            name,
            description,
            image
        })

        return res.status(200).json(activity).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteActivityById = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Id is required' });
        }

        const activity = await ActivityModel.deleteActivityById(id);

        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }

        return res.sendStatus(200).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const updateActivityById = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { name, description, category } = req.body;

        if (!id || !name || !description || !category) {
            return res.status(400).json({ message: 'Id, name, description and category are required' });
        }

        const activity = await ActivityModel.updateActivityById(id, {
            name,
            description,
            category
        });

        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }

        return res.status(200).json(activity).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
