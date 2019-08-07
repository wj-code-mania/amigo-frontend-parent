import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ServerService } from '../service/server';
import { AuthService } from '../service/authservice';
let HomeComponent = class HomeComponent {
    constructor(serverService, server, authService, router) {
        this.serverService = serverService;
        this.server = server;
        this.authService = authService;
        this.router = router;
        this.imageUrlArray = [
            'assets/img/home/slider/slider-1.jpg',
            'assets/img/home/slider/slider-2.jpg',
            'assets/img/home/slider/slider-3.jpg',
            'assets/img/home/slider/slider-4.jpg'
        ];
    }
    moveSlideImg(index) {
        this.slideshow.onSlide(index);
    }
    redirectPage(page) {
        if (page == 'parent') {
            window.location.href = this.server.parentUrl + page;
        }
        else if (page == 'manager') {
            window.location.href = this.server.managerUrl + page;
        }
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    ViewChild('loginModal'),
    tslib_1.__metadata("design:type", ModalDirective)
], HomeComponent.prototype, "loginModal", void 0);
tslib_1.__decorate([
    ViewChild('registerModal'),
    tslib_1.__metadata("design:type", ModalDirective)
], HomeComponent.prototype, "registerModal", void 0);
tslib_1.__decorate([
    ViewChild('slideshow'),
    tslib_1.__metadata("design:type", Object)
], HomeComponent.prototype, "slideshow", void 0);
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ServerService,
        ServerService,
        AuthService,
        Router])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map