import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerRoutingModule } from './volunteer.routing';
import { VolunteerComponent } from './volunteer.component';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    VolunteerComponent
  ],
  imports: [
    CommonModule,
    VolunteerRoutingModule,
    SlideshowModule
  ]
})
export class VolunteerModule { }
