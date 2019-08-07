import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../service/server';
import { AuthService } from '../service/authservice';
let VolunteerComponent = class VolunteerComponent {
    constructor(serverService, server, authService, router) {
        this.serverService = serverService;
        this.server = server;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
};
VolunteerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-volunteer',
        templateUrl: './volunteer.component.html',
        styleUrls: ['./volunteer.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ServerService,
        ServerService,
        AuthService,
        Router])
], VolunteerComponent);
export { VolunteerComponent };
//# sourceMappingURL=volunteer.component.js.map