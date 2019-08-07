import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VolunteerComponent } from './volunteer.component';
const routes = [{
        path: '',
        component: VolunteerComponent
    }];
let VolunteerRoutingModule = class VolunteerRoutingModule {
};
VolunteerRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], VolunteerRoutingModule);
export { VolunteerRoutingModule };
//# sourceMappingURL=volunteer.routing.js.map