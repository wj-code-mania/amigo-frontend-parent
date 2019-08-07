import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BusComponent } from './bus.component';
const routes = [{
        path: '',
        component: BusComponent
    }];
let BusRoutingModule = class BusRoutingModule {
};
BusRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], BusRoutingModule);
export { BusRoutingModule };
//# sourceMappingURL=bus.routing.js.map