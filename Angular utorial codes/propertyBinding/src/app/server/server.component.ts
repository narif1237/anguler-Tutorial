import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverStatus: string;
  @Input() serverName: string;
  
  @Output() name=new EventEmitter<{srvName:string;}>();
  

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
  giveDataToParent()
  {
    console.log("button clicked");
    
   
    this.name.emit({srvName:this.serverName});
  }
  ngOnInit() {
  }

}
