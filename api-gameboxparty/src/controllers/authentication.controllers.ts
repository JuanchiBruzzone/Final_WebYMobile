import 'dotenv/config';
import express from 'express';
import { getUserByEmail, createUser } from '../models/users';
import { encryptPassword, comparePassword } from '../utils/auth.utils';
import jwt from 'jsonwebtoken';
import { getRoleByName } from '../models/roles';

export const login = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await getUserByEmail(email).select('+password');

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const matchPassword = await comparePassword(password, user.password);

        if (!matchPassword) {
            return res.status(403).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: 86400
        })

        return res.status(200).json({token}).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password, username } = req.body;

        if (!email || !password || !username) {
            return res.status(400).json({ message: 'Email, username and password are required' });
        }

        const existingUser = await getUserByEmail(email)

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const role = await getRoleByName('user');

        const user = await createUser({
            email,
            username,
            password: await encryptPassword(password),
            role: [role._id]
        })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: 86400
        })

        return res.status(201).json({ token }).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(404);
    }
}