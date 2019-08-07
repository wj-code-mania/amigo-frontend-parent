import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CanteenComponent } from './canteen.component';
const routes = [{
        path: '',
        component: CanteenComponent
    }];
let CanteenRoutingModule = class CanteenRoutingModule {
};
CanteenRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], CanteenRoutingModule);
export { CanteenRoutingModule };
//# sourceMappingURL=canteen.routing.js.map