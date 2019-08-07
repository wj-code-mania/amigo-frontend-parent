import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParentConfig } from '../config/parent.config';
import { AuthService } from './authservice';
let ServerService = class ServerService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.baseUrl = ParentConfig.endPoints.server;
        this.managerUrl = ParentConfig.endPoints.mananger;
        this.parentUrl = ParentConfig.endPoints.parent;
    }
    get(apiUrl, authRequired = false) {
        var headers = new HttpHeaders({
            'Authorization': this.authService.getToken()
        });
        var options = { headers: headers };
        if (authRequired) {
            return this.http.get(this.baseUrl + apiUrl, options);
        }
        else {
            return this.http.get(this.baseUrl + apiUrl);
        }
    }
    post(apiUrl, content, authRequired = false) {
        var headers = new HttpHeaders({
            'Authorization': this.authService.getToken()
        });
        var options = { headers: headers };
        if (authRequired) {
            return this.http.post(this.baseUrl + apiUrl, content, options);
        }
        else {
            return this.http.post(this.baseUrl + apiUrl, content);
        }
    }
    put(apiUrl, content, authRequired = false) {
        var headers = new HttpHeaders({
            'Authorization': this.authService.getToken()
        });
        var options = { headers: headers };
        if (authRequired) {
            return this.http.put(this.baseUrl + apiUrl, content, options);
        }
        else {
            return this.http.put(this.baseUrl + apiUrl, content);
        }
    }
    delete(apiUrl, authRequired = false) {
        var headers = new HttpHeaders({
            'Authorization': this.authService.getToken()
        });
        var options = { headers: headers };
        if (authRequired) {
            return this.http.delete(this.baseUrl + apiUrl, options);
        }
        else {
            return this.http.delete(this.baseUrl + apiUrl);
        }
    }
};
ServerService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        AuthService])
], ServerService);
export { ServerService };
//# sourceMappingURL=server.js.map