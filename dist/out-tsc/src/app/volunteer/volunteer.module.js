import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerRoutingModule } from './volunteer.routing';
import { VolunteerComponent } from './volunteer.component';
import { SlideshowModule } from 'ng-simple-slideshow';
let VolunteerModule = class VolunteerModule {
};
VolunteerModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            VolunteerComponent
        ],
        imports: [
            CommonModule,
            VolunteerRoutingModule,
            SlideshowModule
        ]
    })
], VolunteerModule);
export { VolunteerModule };
//# sourceMappingURL=volunteer.module.js.map