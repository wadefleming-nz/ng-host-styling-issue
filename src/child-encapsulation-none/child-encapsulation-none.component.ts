import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-encapsulation-none',
  template: `<p>child with Encapsulation.None</p>`,
  styleUrls: ['./child-encapsulation-none.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChildEncapsulationNoneComponent {
}