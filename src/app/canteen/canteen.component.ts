import { Component, OnInit, ViewChild } from '@angular/core';
import {formatDate} from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ServerService } from '../service/server';
import { AuthService } from '../service/authservice';
import { ParentInfoService } from '../service/parentInfoService';

import swal from 'sweetalert2';
declare var $;
declare var $

@Component({
  selector: 'app-canteen',
  templateUrl: './canteen.component.html',
  styleUrls: ['./canteen.component.scss']
})
export class CanteenComponent implements OnInit {
  @ViewChild('addCartModal') public addCartModal: ModalDirective;
  constructor(
    public server: ServerService,
    public authService: AuthService,
    public parentInfoService: ParentInfoService,
    public router: Router

  ) {}
  /*********** pagenation *****************/
  collection = {total: 0, data: []};
  pages_count=0;
  pages = [];
  config = {
    id: 'custom',
    itemsPerPage: 9,
    currentPage: 1,
    totalItems: this.collection.total,
    maxShowPages: 7
  };
  
  onPageChange(){
    this.category_filter.start = (this.config.currentPage-1)*this.config.itemsPerPage;
    this.category_filter.length=this.config.itemsPerPage;
    this.getCanteenList(this.category_filter);
  }
  isFirstPage(){
    if(this.config.currentPage==1)
      return true;
    else return false;
  }
  isLastPage(){
    if(this.config.currentPage==this.pages_count || this.pages_count==0)
      return true;
    else 
      return false;
  }
  makePages(){
      if(this.collection.total % this.config.itemsPerPage == 0)
      this.pages_count = this.collection.total / this.config.itemsPerPage;
    else{
      this.pages_count = this.collection.total / this.config.itemsPerPage;
      this.pages_count = parseInt(this.pages_count.toString())+1;
    }
    this.pages = []

    var startPage = this.config.currentPage-3; var endPage = this.config.currentPage+3;
    if(startPage<1) startPage=1;
    if(endPage>this.pages_count) endPage=this.pages_count;
    
    for(var i=startPage;i<=endPage;i++)
    {
      this.pages.push(
        {
          value: i,
          label: i
        }
      )
    }
    
  }
  getCurrent(){
    return this.config.currentPage;
  }
  setCurrent(page){
    this.config.currentPage=page;
    this.onPageChange();
  }
  previous(){
    if(this.config.currentPage>1){
      this.config.currentPage--;
      this.onPageChange();
    }
  }
  next(){
    if(this.config.currentPage<this.pages_count){
      this.config.currentPage++;
      this.onPageChange();
    }
      
  }
/*************************************** */
  category_list = [];
  class_type_list = [];

  category_filter : any = {};

  curDateTime = '';
  current_category_name = "";
  current_product_index = 0;
  check_list = [];          // currently checked student list - array of booleans
  check_option_list = [];   // checked option list - array of booleans

  show_option = false;
  show_price = false;

  total_price = 0;

  ngOnInit() {
    this.getCategoryList();
    this.getClassTypeList();

    this.curDateTime = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.category_filter = {
      categoryId : 0,
      keyword: '',
      start : "0",
      length : this.config.itemsPerPage,
      pageDate : this.curDateTime,
      fromPrice: 0,
      toPrice: 1000,
      classTypeId: 0
    };

    this.current_category_name = this.getCategoryNameById(0);

    this.getCanteenList(this.category_filter);
  }

  ngAfterViewInit(): void {
    $('#datepicker').datepicker({
      autoclose: true,
      autoSize: true,
      todayHighlight : true,
      dateFormat: 'yy-mm-dd'
    });

    $("#price-range").slider({
      range: true,
      min: this.category_filter.fromPrice,
      max: this.category_filter.toPrice,
      values: [ this.category_filter.fromPrice, this.category_filter.toPrice ],
      slide: function( event, ui ) {
        $( "#price-amount-1" ).val( ui.values[ 0 ] );
        $( "#price-amount-2" ).val( ui.values[ 1 ] );
      }
    });

    $( "#price-amount-1" ).val( $( "#price-range" ).slider( "values", 0 ));
    $( "#price-amount-2" ).val( $( "#price-range" ).slider( "values", 1 ));
  }

  getCategoryList() {

    this.server.post('get_category_list', {
      schoolId : this.authService.get('schoolId')
    }, true).subscribe(resp => {
      if (resp['code'] === 200) {
        this.category_list = resp['category_list'];
      } else {
        this.category_list = [];
      }
    });
  }

  // attachSelectBox() {
  //   $('.select-drop#guiest_id4').selectbox('detach');
  //   $('.select-drop#guiest_id4').selectbox('attach');
  // }

  getClassTypeList() {
    this.server.post('get_class_type_list', {
    }, true).subscribe(resp => {
      if (resp['code'] === 200) {
        this.class_type_list = resp['class_type_list'];
        // setTimeout(this.attachSelectBox, 10);  
      } else {
        this.class_type_list = [];
      }
    });
  }

  changeDate() {
    this.category_filter.pageDate = this.curDateTime;
    this.search();
  }

  chooseCategory(category_id) {
    this.category_filter.categoryId = category_id;
    this.current_category_name = this.getCategoryNameById(category_id);
    this.getCanteenList(this.category_filter);
    
  }

  getCategoryNameById(category_id) {
    if (category_id == 0) {
      return "All categories";
    }
  
    for (let category_info of this.category_list) {
      if (category_info.id == category_id) {
        return category_info.name;
      }
    }

    return "";
  }

  getCanteenList(category_filter) {
    this.server.post('get_canteen_list', {
        categoryId : category_filter.categoryId,
        keyword: category_filter.keyword,
        start : category_filter.start,
        length : category_filter.length,
        pageDate : category_filter.pageDate,
        fromPrice: category_filter.fromPrice,
        toPrice: category_filter.toPrice,
        classTypeId: category_filter.classTypeId
      }, true).subscribe(resp => {
        if (resp['code'] === 200) {
          this.collection.total = resp['product_list'].total;
          this.collection.data = resp['product_list'].data;
          this.config.totalItems = this.collection.total;
          this.makePages();
        } else {
          this.collection = { total: 0, data: [] };
        }
    });
  }

  search() {
    this.getCanteenList(this.category_filter);
  }

  filter() {
    this.category_filter.fromPrice = $("#price-amount-1").val();
    this.category_filter.toPrice = $("#price-amount-2").val();
    this.search();
    
  }


  // check options will be reset.
  resetModalInfo() {
    this.total_price = this.collection.data[this.current_product_index].price;

    this.check_list = [];          
    this.check_option_list = [];   
  
    this.show_option = false;
    this.show_price = false;
  }

  // if product index is provided, it will show cart modal dialog.
  openCartModal(product_index) {
    this.current_product_index = product_index;
    this.resetModalInfo();
    this.addCartModal.show();
    
  }

  // if one of checkbox is checked at least, this function will show options to choose optional meal
  displayOption() {
    var tmp_show_option = false;
    for (let check_item of this.check_list) {
      if (check_item) { tmp_show_option = true; break; }
    }
    this.show_option = tmp_show_option;
  }

  // if one of option is checked at least, this function will show total price
  displayPrice() {
    this.updatePrice();

    var tmp_show_price = false;
    for (let option_item of this.check_option_list) {
      if (option_item) { tmp_show_price = true; break; }
    }
    this.show_price = tmp_show_price;
    
  }

  // calculate total price and update price value
  updatePrice() {
    var index = 0;
    this.total_price = this.collection.data[this.current_product_index].price;

    for (let option_item of this.check_option_list) {
      if (option_item) {
         this.total_price += Number(this.collection.data[this.current_product_index].options[index].price);
      }
      index++;
    }
  }

  // it's time to put some products into your cart~!!!
  addToCart() {
    var checked_student_id_list = [];
    var index = 0;
    for (let check_item of this.check_list) {
      if (check_item) {
        checked_student_id_list.push({id:this.parentInfoService.student_list[index].id});
      }
      index++;
    }

    var checked_option_list = [];
    index = 0;
    for (let check_item of this.check_option_list) {
      if (check_item) {
        checked_option_list.push(this.collection.data[this.current_product_index]['options'][index]);
      }
      index++;
    }
    
    this.parentInfoService.addToCartInfo.productId = this.collection.data[this.current_product_index].id;
    this.parentInfoService.addToCartInfo.studentList =checked_student_id_list;
    this.parentInfoService.addToCartInfo.options =checked_option_list;
    this.parentInfoService.addToCartInfo.bookingDate =this.curDateTime;
    this.parentInfoService.addToCartInfo.qty = 1;
    this.parentInfoService.addToCart();
    this.addCartModal.hide();
    
  }

}
