import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniformRoutingModule } from './uniform.routing';
import { UniformComponent } from './uniform.component';
import { SlideshowModule } from 'ng-simple-slideshow';
let UniformModule = class UniformModule {
};
UniformModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            UniformComponent
        ],
        imports: [
            CommonModule,
            UniformRoutingModule,
            SlideshowModule
        ]
    })
], UniformModule);
export { UniformModule };
//# sourceMappingURL=uniform.module.js.map