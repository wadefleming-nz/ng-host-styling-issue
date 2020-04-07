import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-encapsulation-none',
  templateUrl: './child-encapsulation-none.component.html',
  styleUrls: ['./child-encapsulation-none.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChildEncapsulationNoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}