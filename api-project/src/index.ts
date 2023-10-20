import express from 'express';

import gameRoomsRouter from './routes/gameRooms';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log('someone pinged here! ' + new Date().toLocaleDateString());
    res.send('pong');
});

app.use('/api/', gameRoomsRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});