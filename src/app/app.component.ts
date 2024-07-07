import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counterProgress: number= 0;
  totalCountDown: number= 15;
  /**
   *
   */
  constructor() {
  }
  updateProgress($event : number){
    this.counterProgress = (this.totalCountDown-$event)/this.totalCountDown*100;
  }
  countDownFinish(){
    console.log("Count Down Finished");
  }
}
