import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ServerService } from '../service/server';
import { AuthService } from '../service/authservice';

import swal from 'sweetalert2';

declare var $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('slideshow') slideshow: any;

  imageUrlArray = [
    'assets/img/home/slider/slider-1.jpg',
    'assets/img/home/slider/slider-2.jpg',
    'assets/img/home/slider/slider-3.jpg',
    'assets/img/home/slider/slider-4.jpg'
  ];


  constructor(
    public serverService: ServerService,
    public server: ServerService,
    public authService: AuthService,
    public router: Router
  ) { }

  moveSlideImg(index){
    this.slideshow.onSlide(index);
  }

  redirectPage(page){
    if(page == 'parent'){
      window.location.href = this.server.parentUrl + page;
    }else if(page == 'manager'){
      window.location.href = this.server.managerUrl + page;
    }
  }

  ngOnInit() {
  }

}
