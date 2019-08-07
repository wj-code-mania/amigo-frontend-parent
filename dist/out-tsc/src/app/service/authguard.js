import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './authservice';
import { ServerService } from '../service/server';
let AuthguardService = class AuthguardService {
    constructor(authService, serverService, server, router) {
        this.authService = authService;
        this.serverService = serverService;
        this.server = server;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isValid()) {
            return true;
        }
        else {
            this.router.navigate(['/index']);
            // swal({
            //   title: 'Please Login!',
            //   text: 'Wrong email or password',
            //   type: 'error',
            //   buttonsStyling: false,
            //   confirmButtonClass: 'btn btn-danger',
            //   confirmButtonText: 'Ok'
            // }).catch(swal.noop);
            return false;
        }
    }
};
AuthguardService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService,
        ServerService,
        ServerService,
        Router])
], AuthguardService);
export { AuthguardService };
//# sourceMappingURL=authguard.js.map