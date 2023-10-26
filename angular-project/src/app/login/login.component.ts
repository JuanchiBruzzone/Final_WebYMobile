import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  formulario: FormGroup;

  usersService = inject(UsersService);

  constructor() {
    this.formulario = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

    async onSubmit() {
    const response = await this.usersService.login(this.formulario.value);
    console.log(response);
    }
  
}
