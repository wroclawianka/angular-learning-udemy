import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None, 
  // Emulated - default 
  // None - means that even if you put style in this component, then will be use in all places (application wide)
  // Native -  shadow DOM technology, only in browsers that support it, allows hidden DOM trees to be attached to elements in the regular DOM tree
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  // alias used, which will be working outside of this component

  constructor() { }

  ngOnInit() {
  }

}
