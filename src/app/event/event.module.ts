import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event.routing';
import { EventComponent } from './event.component';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    EventComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    SlideshowModule
  ]
})
export class EventModule { }
