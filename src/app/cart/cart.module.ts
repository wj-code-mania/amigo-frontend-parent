import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartRoutingModule } from './cart.routing';
import { CartComponent } from './cart.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    ModalModule
  ]
})
export class CartModule { }
