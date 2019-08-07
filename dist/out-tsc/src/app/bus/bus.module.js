import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusRoutingModule } from './bus.routing';
import { BusComponent } from './bus.component';
import { SlideshowModule } from 'ng-simple-slideshow';
let BusModule = class BusModule {
};
BusModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            BusComponent
        ],
        imports: [
            CommonModule,
            BusRoutingModule,
            SlideshowModule
        ]
    })
], BusModule);
export { BusModule };
//# sourceMappingURL=bus.module.js.map