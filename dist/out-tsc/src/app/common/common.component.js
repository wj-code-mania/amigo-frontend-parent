import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../service/server';
import { AuthService } from '../service/authservice';
import { ParentInfoService } from '../service/parentInfoService';
let CommonComponent = class CommonComponent {
    constructor(serverService, server, authService, parentInfoService, router) {
        this.serverService = serverService;
        this.server = server;
        this.authService = authService;
        this.parentInfoService = parentInfoService;
        this.router = router;
        this.isShoppingBasket = 0;
    }
    ngOnInit() {
        this.parentInfoService.getStudentList();
    }
    shoppingBasketClick() {
        if (this.isShoppingBasket == 0)
            this.isShoppingBasket = 1;
        else
            this.isShoppingBasket = 0;
    }
    logout() {
        this.server.get('logout', true).subscribe(resp => {
            this.authService.logout();
        });
    }
};
CommonComponent = tslib_1.__decorate([
    Component({
        selector: 'app-common',
        templateUrl: './common.component.html',
        styleUrls: ['./common.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ServerService,
        ServerService,
        AuthService,
        ParentInfoService,
        Router])
], CommonComponent);
export { CommonComponent };
//# sourceMappingURL=common.component.js.map