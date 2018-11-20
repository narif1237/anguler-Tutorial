import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  server:number;
  allowNewServer=false;
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;

    },2000)
   }

  ngOnInit() {
    this.server=45;
  }

}