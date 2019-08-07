import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ServerService } from '../service/server';
import { AuthService } from '../service/authservice';
import { ParentInfoService } from '../service/parentInfoService';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {
  
  isShoppingBasket = false;
  
  constructor(
    public serverService: ServerService,
    public server: ServerService,
    public authService: AuthService,
    public parentInfoService:ParentInfoService,
    public router: Router
  ) { }
  
  ngOnInit() {
    this.parentInfoService.getStudentList();
    this.parentInfoService.getCartList();
  }
  shoppingBasketClick(){
    if(this.parentInfoService.cart_list.length==0) return;
    if(this.isShoppingBasket==false)
      this.isShoppingBasket=true;
    else
      this.isShoppingBasket=false;
  }
  logout() {
    this.server.get('logout', true).subscribe(resp => {
      this.authService.logout();
    });
  }
  redirectParentPage(page){
    window.location.href = page;
  }
}
