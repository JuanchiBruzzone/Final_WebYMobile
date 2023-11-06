import { Server as SocketServer } from 'socket.io';
import { server } from './server';

const io = new SocketServer(server, {
    cors: {
        credentials: true,
    }
});

io.on('connection', (socket) => {
    socket.on('join-room', room => {
        socket.join(room);
        socket.to(room).emit('message', 'Welcome to the room!');
        console.log(room);
    });
});