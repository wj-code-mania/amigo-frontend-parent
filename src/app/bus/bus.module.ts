import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus.routing';
import { BusComponent } from './bus.component';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    BusComponent
  ],
  imports: [
    CommonModule,
    BusRoutingModule,
    SlideshowModule
  ]
})
export class BusModule { }
