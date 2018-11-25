import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverStatus: string;


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getColor() {
    if (this.serverStatus === 'online') {
      return 'green';
    } else {
      return 'red';
    }
  }
  ngOnInit() {
  }

}
