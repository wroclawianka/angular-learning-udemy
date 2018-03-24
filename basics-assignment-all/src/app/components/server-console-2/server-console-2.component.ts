import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-2',
  templateUrl: './server-console-2.component.html',
  styleUrls: ['./server-console-2.component.css']
})
export class ServerConsole2Component {
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}
