import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-encapsulation-emulated',
  template: `child with Encapsulation.Emulated`,
  styleUrls: ['./child-encapsulation-emulated.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ChildEncapsulationEmulatedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}