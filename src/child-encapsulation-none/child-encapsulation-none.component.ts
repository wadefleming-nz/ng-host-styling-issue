import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-encapsulation-none',
  template: `child with Encapsulation.Emulated`,
  styleUrls: ['./child-encapsulation-none.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChildEncapsulationNoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}