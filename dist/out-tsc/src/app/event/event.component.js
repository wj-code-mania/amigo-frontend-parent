import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../service/server';
import { AuthService } from '../service/authservice';
let EventComponent = class EventComponent {
    constructor(serverService, server, authService, router) {
        this.serverService = serverService;
        this.server = server;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
};
EventComponent = tslib_1.__decorate([
    Component({
        selector: 'app-event',
        templateUrl: './event.component.html',
        styleUrls: ['./event.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ServerService,
        ServerService,
        AuthService,
        Router])
], EventComponent);
export { EventComponent };
//# sourceMappingURL=event.component.js.map