import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
let AuthService = class AuthService {
    constructor(_router) {
        this._router = _router;
        this.data = {};
        this.tag = 'amigo';
        this.load();
    }
    save() {
        localStorage.setItem(this.tag, JSON.stringify(this.data));
    }
    destroy() {
        localStorage.removeItem(this.tag);
        this.load();
    }
    load() {
        try {
            const info = localStorage.getItem(this.tag);
            this.data = JSON.parse(info);
        }
        catch (e) {
            this.data = {};
        }
        if (!this.data) {
            this.data = {};
        }
    }
    set(key, value) {
        this.data[key] = value;
        this.save();
    }
    get(key) {
        if (this.data.hasOwnProperty(key)) {
            return this.data[key];
        }
        else {
            return false;
        }
    }
    logout() {
        this.destroy();
        this.set('email', null);
        this.set('token', null);
        this.set('school_id', null);
        localStorage.removeItem('token');
        this._router.navigateByUrl('/index');
    }
    isValid() {
        // return !!localStorage.getItem('token');
        this.load();
        const token = this.data['token'];
        const accountType = this.data['accountType'];
        if (token && accountType == "amigoParent") {
            return true;
        }
        else {
            return false;
        }
    }
    getToken() {
        this.load();
        return this.data['token'];
        // return localStorage.getItem('token');
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], AuthService);
export { AuthService };
//# sourceMappingURL=authservice.js.map