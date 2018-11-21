import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  server: number;
  allowNewServer = false;
  serverStatus: string;
  serverName: string;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;

    }, 2000);
  }

  ngOnInit() {
    this.server = 45;
  }
  onclickServerStatus() {
    this.serverStatus = 'server created';
  }
  updateServerName(event: any) {
    this.serverName = event.target.value;
  }

}
