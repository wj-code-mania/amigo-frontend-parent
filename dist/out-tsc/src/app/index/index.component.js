import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ServerService } from '../service/server';
import { AuthService } from '../service/authservice';
import swal from 'sweetalert2';
let IndexComponent = class IndexComponent {
    constructor(serverService, server, authService, router) {
        this.serverService = serverService;
        this.server = server;
        this.authService = authService;
        this.router = router;
        this.user = {};
        this.imageUrlArray = [
            'assets/img/home/slider/slider-1.jpg',
            'assets/img/home/slider/slider-2.jpg',
            'assets/img/home/slider/slider-3.jpg',
            'assets/img/home/slider/slider-4.jpg'
        ];
        this.school_list = [];
    }
    getSchoolList() {
        this.server.get('get_school_list', false).subscribe(resp => {
            if (resp['code'] === 200) {
                this.school_list = resp['school_list'];
            }
            else {
                this.school_list = [];
            }
        });
    }
    ngOnInit() {
        this.user = {
            email: '',
            password: '',
            schoolId: '',
            firstName: '',
            lastName: '',
            mobileNumber: '',
            confirmPassword: '',
            verify_code: ''
        };
        this.getSchoolList();
    }
    moveSlideImg(index) {
        this.slideshow.onSlide(index);
    }
    redirectPage(page) {
        if (page == 'parent') {
            window.location.href = this.server.parentUrl;
        }
        else if (page == 'manager') {
            window.location.href = this.server.managerUrl;
        }
    }
    verify() {
        this.serverService.post('activate_user', {
            email: this.user.email,
            activateCode: this.user.verify_code
        }, true).subscribe((resp) => {
            if (resp['code'] === 200) {
                if (resp['msg'] == 'Success') {
                    this.router.navigate(['/home']);
                }
                else {
                    this.authService.destroy();
                    swal({
                        title: 'Failed to login',
                        text: 'Wrong email or active code',
                        type: 'error',
                        buttonsStyling: false,
                        confirmButtonClass: 'btn btn-danger',
                        confirmButtonText: 'Ok'
                    }).catch(swal.noop);
                }
            }
            else {
                this.authService.destroy();
                swal({
                    title: 'Failed to login',
                    text: 'Wrong email or active code',
                    type: 'error',
                    buttonsStyling: false,
                    confirmButtonClass: 'btn btn-danger',
                    confirmButtonText: 'Ok'
                }).catch(swal.noop);
            }
        }, err => {
            this.authService.destroy();
            swal({
                title: 'Failed to login',
                text: 'Wrong email or active code',
                type: 'error',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-danger',
                confirmButtonText: 'Ok'
            }).catch(swal.noop);
        });
    }
    login() {
        this.serverService.post('login', {
            email: this.user.email,
            password: this.user.password
        }).subscribe((resp) => {
            if (resp['code'] === 200) {
                if (resp['msg'] == 'Success') {
                    const data = resp['data'];
                    this.authService.set('accountType', 'amigoParent');
                    this.authService.set('email', data.email);
                    this.authService.set('token', data.token);
                    this.authService.set('school_id', data.school_id);
                    if (!data.is_activated) {
                        this.loginModal.hide();
                        this.verifyModal.config.backdrop = "static";
                        this.verifyModal.config.keyboard = false;
                        this.verifyModal.show();
                        return false;
                    }
                    this.router.navigate(['/home']);
                }
                else {
                    swal({
                        title: 'Failed to login',
                        text: 'Wrong email or password',
                        type: 'error',
                        buttonsStyling: false,
                        confirmButtonClass: 'btn btn-danger',
                        confirmButtonText: 'Ok'
                    }).catch(swal.noop);
                }
            }
            else {
                swal({
                    title: 'Failed to login',
                    text: 'Wrong email or password',
                    type: 'error',
                    buttonsStyling: false,
                    confirmButtonClass: 'btn btn-danger',
                    confirmButtonText: 'Ok'
                }).catch(swal.noop);
            }
        }, err => {
            swal({
                title: 'Failed to login',
                text: 'Wrong email or password',
                type: 'error',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-danger',
                confirmButtonText: 'Ok'
            }).catch(swal.noop);
        });
    }
    _registerFormValidate() {
        if (this.user.schoolId == "") {
            swal({
                title: 'Failed to Register',
                text: 'Please select school.',
                type: 'error',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-danger',
                confirmButtonText: 'Ok'
            }).catch(swal.noop);
            return false;
        }
        if (this.user.firstName == "" || this.user.lastName == "") {
            swal({
                title: 'Failed to Register',
                text: 'Please type your first and last name.',
                type: 'error',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-danger',
                confirmButtonText: 'Ok'
            }).catch(swal.noop);
            return false;
        }
        if (this.user.mobileNumber == "") {
            swal({
                title: 'Failed to Register',
                text: 'Please type your mobile phone number.',
                type: 'error',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-danger',
                confirmButtonText: 'Ok'
            }).catch(swal.noop);
            return false;
        }
        if (this.user.password == "" || this.user.confirmPassword != this.user.password) {
            swal({
                title: 'Failed to Register',
                text: 'Please type correctly password.',
                type: 'error',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-danger',
                confirmButtonText: 'Ok'
            }).catch(swal.noop);
            return false;
        }
        var re = /\S+@\S+\.\S+/;
        if (!re.test(this.user.email) || this.user.email == "") {
            swal({
                title: 'Failed to Register',
                text: 'Please type your email address.',
                type: 'error',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-danger',
                confirmButtonText: 'Ok'
            }).catch(swal.noop);
            return false;
        }
        return true;
    }
    register() {
        var isValidation = this._registerFormValidate();
        if (isValidation == false)
            return false;
        this.serverService.post('register_user', {
            email: this.user.email,
            password: this.user.password,
            schoolId: this.user.schoolId,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            mobileNumber: this.user.mobileNumber,
            confirmPassword: this.user.confirmPassword
        }).subscribe((resp) => {
            if (resp['code'] === 200) {
                if (resp['msg'] == 'Success') {
                    const data = resp['data'];
                    this.registerModal.hide();
                    this.user = {
                        email: '',
                        password: '',
                        schoolId: '',
                        firstName: '',
                        lastName: '',
                        mobileNumber: '',
                        confirmPassword: ''
                    };
                    swal({
                        title: 'Sucess to Register',
                        text: '',
                        type: 'success',
                        buttonsStyling: false,
                        confirmButtonClass: 'btn btn-danger',
                        confirmButtonText: 'Ok'
                    }).catch(swal.noop);
                }
                else {
                    swal({
                        title: 'Failed to Register',
                        text: 'Wrong userInfo',
                        type: 'error',
                        buttonsStyling: false,
                        confirmButtonClass: 'btn btn-danger',
                        confirmButtonText: 'Ok'
                    }).catch(swal.noop);
                }
            }
            else {
                swal({
                    title: 'Failed to Register',
                    text: 'Wrong userInfo',
                    type: 'error',
                    buttonsStyling: false,
                    confirmButtonClass: 'btn btn-danger',
                    confirmButtonText: 'Ok'
                }).catch(swal.noop);
            }
        }, err => {
            swal({
                title: 'Failed to Register',
                text: 'Wrong userInfo',
                type: 'error',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-danger',
                confirmButtonText: 'Ok'
            }).catch(swal.noop);
        });
    }
};
tslib_1.__decorate([
    ViewChild('loginModal'),
    tslib_1.__metadata("design:type", ModalDirective)
], IndexComponent.prototype, "loginModal", void 0);
tslib_1.__decorate([
    ViewChild('verifyModal'),
    tslib_1.__metadata("design:type", ModalDirective)
], IndexComponent.prototype, "verifyModal", void 0);
tslib_1.__decorate([
    ViewChild('registerModal'),
    tslib_1.__metadata("design:type", ModalDirective)
], IndexComponent.prototype, "registerModal", void 0);
tslib_1.__decorate([
    ViewChild('slideshow'),
    tslib_1.__metadata("design:type", Object)
], IndexComponent.prototype, "slideshow", void 0);
IndexComponent = tslib_1.__decorate([
    Component({
        selector: 'app-index',
        templateUrl: './index.component.html',
        styleUrls: ['./index.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ServerService,
        ServerService,
        AuthService,
        Router])
], IndexComponent);
export { IndexComponent };
//# sourceMappingURL=index.component.js.map