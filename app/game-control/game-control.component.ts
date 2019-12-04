import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  incrementedNumber = 0;
  @Output() intervalStarted = new EventEmitter<number>();
  @Output() intervalEnded = new EventEmitter<number>();


  constructor() { }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalStarted.emit(this.incrementedNumber + 1);
      this.incrementedNumber++;
    }, 1000);
  }


  onEndGame(closedNumber) {
    closedNumber = this.incrementedNumber;
    clearInterval(this.interval);
    this.intervalEnded.emit(closedNumber);
  }

  ngOnInit() {
  }

}
