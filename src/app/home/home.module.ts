import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlideshowModule
  ]
})
export class HomeModule { }
