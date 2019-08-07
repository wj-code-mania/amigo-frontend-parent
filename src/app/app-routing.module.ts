import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AuthguardService } from './service/authguard';
import { CommonComponent } from './common/common.component';

const AppRoutes: Routes = [
    {
        path: 'index',
        component: IndexComponent
    }
    ,{
        path: '',
        component: CommonComponent,
        canActivate: [AuthguardService],
        children: [
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule'
            },{
                path: 'canteen',
                loadChildren: './canteen/canteen.module#CanteenModule'
            },{
                path: 'uniform',
                loadChildren: './uniform/uniform.module#UniformModule'
            },{
                path: 'event',
                loadChildren: './event/event.module#EventModule'
            },{
                path: 'bus',
                loadChildren: './bus/bus.module#BusModule'
            },{
                path: 'volunteer',
                loadChildren: './volunteer/volunteer.module#VolunteerModule'
            },{
                path: 'product',
                loadChildren: './product/product.module#ProductModule'
            },{
                path: 'cart',
                loadChildren: './cart/cart.module#CartModule'
            },{
                path: 'history',
                loadChildren: './history/history.module#HistoryModule'
            },{
                path: 'notification',
                loadChildren: './notification/notification.module#NotificationModule'
            },{
                path: 'student',
                loadChildren: './student/student.module#StudentModule'
            },{
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
