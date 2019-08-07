import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event.routing';
import { EventComponent } from './event.component';
import { SlideshowModule } from 'ng-simple-slideshow';
let EventModule = class EventModule {
};
EventModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            EventComponent
        ],
        imports: [
            CommonModule,
            EventRoutingModule,
            SlideshowModule
        ]
    })
], EventModule);
export { EventModule };
//# sourceMappingURL=event.module.js.map