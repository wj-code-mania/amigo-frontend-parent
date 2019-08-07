import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AuthguardService } from './service/authguard';
import { CommonComponent } from './common/common.component';
const AppRoutes = [
    {
        path: 'index',
        component: IndexComponent
    },
    {
        path: '',
        component: CommonComponent,
        canActivate: [AuthguardService],
        children: [
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule'
            }, {
                path: 'canteen',
                loadChildren: './canteen/canteen.module#CanteenModule'
            }, {
                path: 'uniform',
                loadChildren: './uniform/uniform.module#UniformModule'
            }, {
                path: 'event',
                loadChildren: './event/event.module#EventModule'
            }, {
                path: 'bus',
                loadChildren: './bus/bus.module#BusModule'
            }, {
                path: 'volunteer',
                loadChildren: './volunteer/volunteer.module#VolunteerModule'
            }, {
                path: 'product',
                loadChildren: './product/product.module#ProductModule'
            }, {
                path: 'cart',
                loadChildren: './cart/cart.module#CartModule'
            }, {
                path: 'history',
                loadChildren: './history/history.module#HistoryModule'
            }, {
                path: 'notification',
                loadChildren: './notification/notification.module#NotificationModule'
            }, {
                path: 'student',
                loadChildren: './student/student.module#StudentModule'
            }, {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(AppRoutes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map