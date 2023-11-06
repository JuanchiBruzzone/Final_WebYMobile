import express from 'express';
import * as UserModel from '../models/users';

export const getUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await UserModel.getUsers();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getUserById = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Id is required' });
        }

        const user = await UserModel.getUserById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getUserByEmail = async (req: express.Request, res: express.Response) => {
    try {
        const { email } = req.params;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        const user = await UserModel.getUserByEmail(email);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const createUser = async (req: express.Request, res: express.Response) => {
    try {
        const { name, email, password, role} = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: 'Name, email, password, and role are required' });
        }

        const user = await UserModel.createUser({
            name,
            email,
            password,
            role
        })

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteUserById = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Id is required' });
        }

        const user = await UserModel.deleteUserById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const updateUserById = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { name, email, password, role } = req.body;

        if (!id) {
            return res.status(400).json({ message: 'Id is required' });
        }

        if (!name && !email && !password && !role) {
            return res.status(400).json({ message: 'At least one field is required' });
        }

        const user = await UserModel.updateUserById(id, {
            name,
            email,
            password,
            role
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
