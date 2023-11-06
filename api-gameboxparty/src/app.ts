import express from 'express';
import router from './routes/index.routes';
import cors from 'cors';
import { createRoles } from './utils/initialSetup';

const app = express();
createRoles();

app.use(cors({
    credentials: true,
}));

app.use(express.json());

app.use('/api', router());

export default app;