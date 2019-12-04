import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @ContentChild('contentNumber', {static: false}) contentNumber: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    //console.log(this.contentNumber.nativeElement.textContent);
  }

}
