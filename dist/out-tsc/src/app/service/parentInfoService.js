import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ServerService } from './server';
import swal from 'sweetalert2';
let ParentInfoService = class ParentInfoService {
    constructor(serverService) {
        this.serverService = serverService;
        this.cartList = [];
        this.student_list = [];
    }
    /**************For parent's children ***********/
    getStudentList() {
        this.serverService.post('get_student_list', {}, true).subscribe(resp => {
            if (resp['code'] === 200) {
                this.student_list = resp['data']['student_list'];
            }
            else {
                swal({
                    title: 'Failed connect to server',
                    text: 'There is a problem in the network.',
                    type: 'error',
                    buttonsStyling: false,
                    confirmButtonClass: 'btn btn-danger',
                    confirmButtonText: 'Ok'
                }).catch(swal.noop);
            }
        });
    }
    /************For Cart*********************************/
    addToCart() {
        console.log("add");
    }
    emptyCart() {
    }
    getCount() {
        return 0; //this.cartList.length;
    }
    getList() {
        return this.cartList;
    }
    getCartList() {
        console.log("getList");
        /*
        this.serverService.post('get_product_list', {
          }, true).subscribe(resp => {
            if (resp['code'] === 200) {
              console.log('asdf');
              // console.log(resp['product_list'].total);
            } else {
              // this.product_list = [];
            }
        });*/
    }
};
ParentInfoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [ServerService])
], ParentInfoService);
export { ParentInfoService };
//# sourceMappingURL=parentInfoService.js.map