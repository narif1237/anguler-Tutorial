import { Component, OnInit, Input ,EventEmitter} from '@angular/core';


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
  ifTest: boolean;
  servers = [];
  name=new EventEmitter<{srvName:string;}>();
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
    this.ifTest = true;
    this.servers.push(this.serverName);
    console.log(this.servers);
  }
  updateServerName(event: any) {
    this.serverName = event.target.value;

  }
  onNameChange(name)
  {
    this.serverName=name.srvName
    console.log("in here");
    console.log(name.srvName);
  }

}
