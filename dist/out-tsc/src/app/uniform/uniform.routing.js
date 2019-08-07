import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniformComponent } from './uniform.component';
const routes = [{
        path: '',
        component: UniformComponent
    }];
let UniformRoutingModule = class UniformRoutingModule {
};
UniformRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], UniformRoutingModule);
export { UniformRoutingModule };
//# sourceMappingURL=uniform.routing.js.map