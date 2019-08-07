import { Component, OnInit, ViewChild } from '@angular/core';
import { ParentInfoService } from '../service/parentInfoService';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ServerService } from '../service/server';


declare var $;
declare var $

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @ViewChild('commentModal') public commentModal: ModalDirective;
  @ViewChild('customizeCartItemModal') public customizeCartItemModal: ModalDirective;

  /**
   * decalre variables
   */
  cur_selected_cart_id = -1;

  check_list = [];          // currently checked student list - array of booleans
  check_option_list = [];   // checked option list - array of booleans

  /**
   * 
   * @param parentInfoService 
   */
  constructor(
    public parentInfoService: ParentInfoService,
    public server: ServerService,
  ) { 

  }

  ngOnInit() {
  }

  removeCartItem(cartId = 0){
    if (!confirm("Are you sure?")){
      return;
    }
    this.parentInfoService.removeCartItem(cartId);
  }

  /**
   * This function is to show comment modal dialog.
   */
  showCommentCartItem(cartIndex = 0){
    this.cur_selected_cart_id = cartIndex;
    console.log("KSTAR Say===>" + this.cur_selected_cart_id);
    this.commentModal.show();
  }

  /**
   * 
   * @param cartId is selected CartItemId
   */
  showCustomizeCartItem(cartIndex = 0){
    this.cur_selected_cart_id = cartIndex;
    this.resetModalInfo();

    this.get_product_info(this.parentInfoService.cart_list[cartIndex].productId);
    for(let student_item of this.parentInfoService.cart_list[this.cur_selected_cart_id].studentList){
      this.check_list.push(true);
    }
    
    // for (let product_item of product_info) {
    //   this.check_option_list.push(product_infos[index]);
    // }


    this.customizeCartItemModal.show();
  }

  isCheckedOptionItem(option_item){
    for (let cart_option_item of 
      this.parentInfoService.cart_list[this.cur_selected_cart_id].options){

        if (option_item == cart_option_item) {
          console.log("true");
          return true;
          
        } else {
          console.log("false");
          return false;
        }
    }
  }

  product_info = [];
    /**
   * 
   * @param product_id 
   */
  get_product_info(product_id){
    this.server.post('get_productid_info', {
      productId : product_id
    }, true).subscribe(resp => {
      if (resp['code'] === 200) { //is success
        // var option_list = [];
        this.product_info = resp['productid_info'][0];
        this.check_option_list = [];
        var checked_flag = false;
        for (let option_item of this.product_info['options']){
          checked_flag = false;
          for (let cart_option_item of 
            this.parentInfoService.cart_list[this.cur_selected_cart_id].options){
              if (option_item.name == cart_option_item.name) {
                checked_flag = true;
              }
          }
          this.check_option_list.push(checked_flag);
        }
      } else { // is false
      }
    });
  }

  /**
   * save customized information to server.
   */
  save_cart(){
    this.customizeCartItemModal.hide();
    var cartId = this.parentInfoService.cart_list[this.cur_selected_cart_id].id;

    var checked_student_id_list = [];
    var index = 0;
    for (let check_item of this.check_list) {
      if (check_item) {
        checked_student_id_list.push({id:this.parentInfoService.cart_list[this.cur_selected_cart_id]
          .studentList[index].id});
      }
      index++;
    }

    var checked_option_list = [];
    index = 0;
    for (let check_item of this.check_option_list) {
      if (check_item) {
        checked_option_list.push(this.product_info['options'][index]);
      }
      index++;
    }


    this.server.post('update_cart_info', {
      cartId : cartId,
      studentList : checked_student_id_list,
      options : checked_option_list
    }, true).subscribe(resp => {
      if (resp['code'] === 200) {
        this.parentInfoService.getCartList();
      } else {

      }
    });
  }

  /**
   * 
   */
  resetModalInfo() {
    // this.total_price = this.collection.data[this.current_product_index].price;

    this.check_list = [];          
    this.check_option_list = [];   
    this.product_info = [];

    // this.show_option = false;
    // this.show_price = false;
  }

  
  displayOption(){

  }

  displayPrice(){

  }

  saveComment(){
    var cartId = this.parentInfoService.cart_list[this.cur_selected_cart_id].id;
    var commentNote = $('#textarea_comment').val();
    console.log("KSTAR Say===>" + commentNote);
    this.server.post('update_cart_info', {
      cartId : cartId,
      comments : commentNote
    }, true).subscribe(resp => {
      if (resp['code'] === 200) {
        console.log("succefully saved!!!");
        this.commentModal.hide();
      } else {
        this.commentModal.hide();
      }
    });
  }
}
