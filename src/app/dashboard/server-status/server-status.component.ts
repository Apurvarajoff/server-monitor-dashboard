import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit,OnDestroy {

  currentStatus:'online' | 'offline' | 'unknown' = 'online';
  private interval ?: ReturnType<typeof setInterval>;

  constructor () {
 
  }
  ngOnInit() {
      this.interval = setInterval(() =>{
      const rnd = Math.random();
      if(rnd <0.5){
        this.currentStatus ='offline'
      }
      else if(rnd <0.9){
        this.currentStatus='online'
      }
      else{
        this.currentStatus='unknown'
      }
    },5000)
  }


  ngAfterViewInit() {
    console.log("After View Init");
  }

  ngOnDestroy(){  
    clearTimeout(this.interval);
  }
}
