import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildEncapsulationEmulatedComponent } from '../child-encapsulation-emulated/child-encapsulation-emulated.component'
import { ChildEncapsulationNoneComponent } from '../child-encapsulation-none/child-encapsulation-none.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ChildEncapsulationEmulatedComponent, ChildEncapsulationNoneComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
