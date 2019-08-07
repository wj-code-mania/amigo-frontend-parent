import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../service/server';
import { AuthService } from '../service/authservice';
let BusComponent = class BusComponent {
    constructor(serverService, server, authService, router) {
        this.serverService = serverService;
        this.server = server;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
};
BusComponent = tslib_1.__decorate([
    Component({
        selector: 'app-bus',
        templateUrl: './bus.component.html',
        styleUrls: ['./bus.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ServerService,
        ServerService,
        AuthService,
        Router])
], BusComponent);
export { BusComponent };
//# sourceMappingURL=bus.component.js.map