import 'dotenv/config';
import app from './app'
import http from 'http';

const PORT = process.env.PORT;

export const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}/`);
});

