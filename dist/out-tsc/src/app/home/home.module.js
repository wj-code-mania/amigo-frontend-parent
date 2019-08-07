import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { SlideshowModule } from 'ng-simple-slideshow';
let HomeModule = class HomeModule {
};
HomeModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            HomeComponent
        ],
        imports: [
            CommonModule,
            HomeRoutingModule,
            SlideshowModule
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map