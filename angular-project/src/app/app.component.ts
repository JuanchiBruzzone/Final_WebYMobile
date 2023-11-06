import { Component } from '@angular/core';
import io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';

  constructor() {
    // const socket = io('http://localhost:8080');
    // socket.on('connect', () => {
    //   socket.emit('join-room', '123123');
    //   socket.on('message', (message) => {
    //     console.log(message);
    //   });
    // });
  }
}
