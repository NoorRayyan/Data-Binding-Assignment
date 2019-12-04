import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  incrementedNo = 0;
  onGameStarted(incrementedNumber: number) {
    this.incrementedNo = incrementedNumber;
    console.log(incrementedNumber);
    console.log(this.incrementedNo);
  }
  onGameEnded(closedNumber: number) {
    console.log(closedNumber);
  }
}
