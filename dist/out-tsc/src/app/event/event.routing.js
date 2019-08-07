import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventComponent } from './event.component';
const routes = [{
        path: '',
        component: EventComponent
    }];
let EventRoutingModule = class EventRoutingModule {
};
EventRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], EventRoutingModule);
export { EventRoutingModule };
//# sourceMappingURL=event.routing.js.map