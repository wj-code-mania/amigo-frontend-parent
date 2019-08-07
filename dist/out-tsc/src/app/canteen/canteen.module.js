import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CanteenRoutingModule } from './canteen.routing';
import { CanteenComponent } from './canteen.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
let CanteenModule = class CanteenModule {
};
CanteenModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            CanteenComponent
        ],
        imports: [
            CommonModule,
            FormsModule,
            CanteenRoutingModule,
            SlideshowModule,
            NgxPaginationModule,
            ModalModule
        ]
    })
], CanteenModule);
export { CanteenModule };
//# sourceMappingURL=canteen.module.js.map