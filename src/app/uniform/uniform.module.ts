import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniformRoutingModule } from './uniform.routing';
import { UniformComponent } from './uniform.component';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    UniformComponent
  ],
  imports: [
    CommonModule,
    UniformRoutingModule,
    SlideshowModule
  ]
})
export class UniformModule { }
