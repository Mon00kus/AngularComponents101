import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {

  @Output() onDecrese = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  @Input() init: number= 0;
  public counter: number= 15;
  private countDownTimeRef: any= null;

  /**
   *
   */
  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("init value updated to: ", changes['init'].currentValue);
    this.startCountDown();
  }

  ngOnDestroy(): void {
    this.clearTimeOut();
  }

  ngOnInit(): void {
    this.doCountdown();
  }

  startCountDown(){
    if(this.init  && this.init>0){
      this.clearTimeOut();
      this.counter=this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    this.countDownTimeRef = setTimeout(()=>{
      this.counter = this.counter-1;
      this.processCountDown();
    }, 1000)
  }

  private clearTimeOut(){
    if(this.countDownTimeRef){
      clearTimeout(this.countDownTimeRef);
      this.countDownTimeRef = null;
    }
  }

  processCountDown() {
    this.onDecrese.emit(this.counter);
    console.log("Count is:", this.counter);
    if (this.counter==0){
      this.onComplete.emit();
      console.log("--counter ends--")
    }else{
      this.doCountdown();
    }
  }
}
