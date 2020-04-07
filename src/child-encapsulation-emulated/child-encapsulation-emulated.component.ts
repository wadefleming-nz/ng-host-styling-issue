import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-encapsulation-emulated',
  template: `<p>child with Encapsulation.Emulated</p>`,
  styleUrls: ['./child-encapsulation-emulated.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ChildEncapsulationEmulatedComponent {
}