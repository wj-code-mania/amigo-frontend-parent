import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CommonComponent } from './common/common.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppAsideModule, AppBreadcrumbModule, AppHeaderModule, AppFooterModule, AppSidebarModule, } from '@coreui/angular';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            IndexComponent,
            CommonComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            SlideshowModule,
            AppAsideModule,
            AppBreadcrumbModule.forRoot(),
            AppFooterModule,
            AppHeaderModule,
            AppSidebarModule,
            ModalModule.forRoot(),
            HttpClientModule,
            FormsModule,
            BsDropdownModule.forRoot(),
            TabsModule.forRoot()
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map