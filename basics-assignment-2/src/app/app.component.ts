import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'TestName';
  message = '';

  constructor() {
  }

  onUsernameInput(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  usernameIsEmpty(): boolean {
    return (this.username.length === 0 || !this.username.trim());
  }

  onResetPassword() {
    this.message = `Password of the user ${this.username} is reset. Go to another form to set a new one`;
  }
}
