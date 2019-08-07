import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { AuthService } from './authservice';
let TokenInterceptorService = class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        const authService = this.injector.get(AuthService);
        const tokenizedReq = req.clone({
            headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
        });
        return next.handle(tokenizedReq);
    }
};
TokenInterceptorService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [Injector])
], TokenInterceptorService);
export { TokenInterceptorService };
//# sourceMappingURL=token-interceptor.service.js.map