import { Component, OnInit } from '@angular/core';

@Component({
  /* selector: '[app-servers]', as an attribute
              -> to use: <div app-servers></div>

  selector: '.app-servers', as a class
              -> to use:  <div class="app-servers"></div>*/

  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
      this.serverCreationStatus = `Server was created. Name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
      this.serverName = (<HTMLInputElement>event.target).value;
  }

}
