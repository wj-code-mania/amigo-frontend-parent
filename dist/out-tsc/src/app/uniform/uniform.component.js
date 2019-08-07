import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../service/server';
import { AuthService } from '../service/authservice';
let UniformComponent = class UniformComponent {
    constructor(serverService, server, authService, router) {
        this.serverService = serverService;
        this.server = server;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
};
UniformComponent = tslib_1.__decorate([
    Component({
        selector: 'app-uniform',
        templateUrl: './uniform.component.html',
        styleUrls: ['./uniform.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ServerService,
        ServerService,
        AuthService,
        Router])
], UniformComponent);
export { UniformComponent };
//# sourceMappingURL=uniform.component.js.map