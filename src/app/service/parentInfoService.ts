import { Injectable } from '@angular/core';
import { ServerService } from './server';
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ParentInfoService {

  student_list = [];

  cart_list = [];
  addToCartInfo : any = {};
  cart_sub_total=0
  tmpQty=0;
  tmpCartId=0;
  constructor(
      public serverService: ServerService
  ) {
    this.addToCartInfo = {
      productId : 0
    };
  }
  /************** For parent's children ***********/
  getStudentList() {
    this.serverService.post('get_student_list', {
      }, true).subscribe(resp => {
        if (resp['code'] === 200) {
          this.student_list=resp['data']['student_list'];
        } else {
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
    if(this.addToCartInfo.productId==0)
      swal({
        title: 'Invalid parameter',
        text: 'please select product.',
        type: 'error',
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-danger',
        confirmButtonText: 'Ok'
      }).catch(swal.noop);
    this.serverService.post('add_to_cart', {
      productId : this.addToCartInfo.productId,
      studentList : this.addToCartInfo.studentList,
      options : this.addToCartInfo.options,
      bookingDate: this.addToCartInfo.bookingDate,
      qty: this.addToCartInfo.qty
    }, true).subscribe(resp => {
      if (resp['code'] === 200) {
        this.getCartList();
      } else {
        swal({
          title: 'Failed Adding to Cart',
          text: 'Wrong userInfo',
          type: 'error',
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-danger',
          confirmButtonText: 'Ok'
        }).catch(swal.noop);
      }
    }, err=> {
      swal({
        title: 'Failed Adding to Cart',
        text: 'Wrong userInfo',
        type: 'error',
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-danger',
        confirmButtonText: 'Ok'
      }).catch(swal.noop);
    });
  }
  emptyCart() {
    this.serverService.post('empty_cart', {
    }, true).subscribe(resp => {
      if (resp['code'] === 200) {
        this.getCartList();
      } else {
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
  removeCartItem(cartId) {
    this.serverService.post('remove_cart_info_by_id', {
      cartId : cartId,
    }, true).subscribe(resp => {
      if (resp['code'] === 200) {
        this.getCartList();
      } else {
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
  changeQty(cartId,e) {
    if(this.tmpQty==e.target.value && this.tmpCartId == cartId)
      return;
    this.tmpQty = e.target.value;
    this.tmpCartId = cartId;
    this.serverService.post('update_cart_info', {
        cartId : cartId,
        qty : e.target.value
      }, true).subscribe(resp => {
        if (resp['code'] === 200) {
          this.getCartList();
        } else {
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


  getCartList() {
    this.serverService.post('get_cart_info', {
    }, true).subscribe(resp => {
      if (resp['code'] === 200) {
        this.cart_list=resp['data']['cart_info'];
        this.cart_sub_total =resp['data']['total_amount'];
      } else {
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

}
