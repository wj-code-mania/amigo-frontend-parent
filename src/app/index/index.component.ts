import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ServerService } from '../service/server';
import { AuthService } from '../service/authservice';

import swal from 'sweetalert2';

declare var $;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  @ViewChild('loginModal') public loginModal: ModalDirective;
  @ViewChild('verifyModal') public verifyModal: ModalDirective;
  @ViewChild('registerModal') public registerModal: ModalDirective;
  @ViewChild('activateModal') public activateModal: ModalDirective;
  @ViewChild('slideshow') slideshow: any;

  constructor(
    public serverService: ServerService,
    public server: ServerService,
    public authService: AuthService,
    public router: Router
  ) { 
    
  }
  
  user : any = {};

  imageUrlArray = [
    'assets/img/home/slider/slider-1.jpg',
    'assets/img/home/slider/slider-2.jpg',
    'assets/img/home/slider/slider-3.jpg',
    'assets/img/home/slider/slider-4.jpg'
  ];

  school_list = [];
  activate_code = '';
  loginSubmitted = true;

  getSchoolList() {
    this.server.get('get_school_list', false).subscribe(resp => {
      if (resp['code'] === 200) {
        this.school_list = resp['school_list'];
      } else {
        this.school_list = [];
      }
    });
  }

  ngOnInit() {
    this.user = {
      email : '',
      password: '',
      schoolId: '',
      firstName: '',
      lastName: '',
      mobileNumber: '',
      confirmPassword: '',
      verify_code:''
    };

    this.getSchoolList();
  }

  moveSlideImg(index){
    this.slideshow.onSlide(index);
  }

  redirectPage(page){
    if(page == 'parent'){
      window.location.href = this.server.parentUrl;
    }else if(page == 'manager'){ 
      window.location.href = this.server.managerUrl;
    }
  }
  verify(){
    this.serverService.post('activate_user', {
      email: this.user.email,
      activateCode: this.user.verify_code
    },true).subscribe(
      (resp) => {
        if (resp['code'] === 200) {
          if(resp['msg'] == 'Success'){
            this.router.navigate(['/home']);
          }else{
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
        } else {
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
      },
      err => {
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
    );
  }
  login() {
    this.serverService.post('login', {
      email: this.user.email,
      password: this.user.password
    }).subscribe(
      (resp) => {
        if (resp['code'] === 200) {
          if(resp['msg'] == 'Success'){
            const data = resp['data'];
            if(data.isActivated == true){
              this.authService.set('accountType', 'amigoParent');
              this.authService.set('email', data.email);
              this.authService.set('token', data.token);
              this.authService.set('schoolId', data.schoolId);
              this.authService.set('schoolEmail',data.schoolInfo.email);
              this.authService.set('phone',data.schoolInfo.phone);
              this.authService.set('openhour',data.schoolInfo.openhour);
              this.authService.set('closehour',data.schoolInfo.closehour);
              this.router.navigate(['/home']);
            }else{
              this.loginSubmitted = true;
              this.loginModal.hide();
              this.activateModal.show();
            }
          }else{
            swal({
              title: 'Failed to login',
              text: 'Wrong email or password',
              type: 'error',
              buttonsStyling: false,
              confirmButtonClass: 'btn btn-danger',
              confirmButtonText: 'Ok'
            }).catch(swal.noop);
          }
        } else {
          swal({
            title: 'Failed to login',
            text: 'Wrong email or password',
            type: 'error',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-danger',
            confirmButtonText: 'Ok'
          }).catch(swal.noop);
        }
      },
      err => {
        swal({
          title: 'Failed to login',
          text: 'Wrong email or password',
          type: 'error',
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-danger',
          confirmButtonText: 'Ok'
        }).catch(swal.noop);
      }
    );
  }
  _registerFormValidate(){
    if(this.user.schoolId=="")
    {
      swal({
        title: 'Failed to Register',
        text: 'Please select a school.',
        type: 'error',
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-danger',
        confirmButtonText: 'Ok'
      }).catch(swal.noop);
      return false;
    }
    if(this.user.firstName=="" || this.user.lastName=="")
    {
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
    if(this.user.mobileNumber=="")
    {
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
    if(this.user.password=="" || this.user.confirmPassword!=this.user.password)
    {
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
    if(!re.test(this.user.email) || this.user.email=="")
    {
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
    if(isValidation==false)
      return false;
    this.serverService.post('register_user', {
      email : this.user.email,
      password: this.user.password,
      schoolId: this.user.schoolId,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      mobileNumber: this.user.mobileNumber,
      confirmPassword: this.user.confirmPassword
    }).subscribe(
      (resp) => {
        if (resp['code'] === 200) {
          if(resp['msg'] == 'Success'){
            this.registerModal.hide();
            this.loginSubmitted = false;
            this.activateModal.show();
          }else{
            swal({
              title: 'Failed to Register',
              text: 'Wrong userInfo',
              type: 'error',
              buttonsStyling: false,
              confirmButtonClass: 'btn btn-danger',
              confirmButtonText: 'Ok'
            }).catch(swal.noop);
          }
        } else {
          swal({
            title: 'Failed to Register',
            text: 'Wrong userInfo',
            type: 'error',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-danger',
            confirmButtonText: 'Ok'
          }).catch(swal.noop);
        }
      },
      err => {
        swal({
          title: 'Failed to Register',
          text: 'Wrong userInfo',
          type: 'error',
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-danger',
          confirmButtonText: 'Ok'
        }).catch(swal.noop);
      }
    );
  }

  resend_activate_code(){
    this.serverService.post('resend_activation_code', {
      email: this.user.email
    }).subscribe(
      (resp) => {
        if (resp['code'] === 200) {
          if(resp['msg'] == 'Success'){
            swal({
              title: 'Success',
              text: 'We sent an activated code to your email.',
              type: 'success',
              buttonsStyling: false,
              confirmButtonClass: 'btn btn-success',
              confirmButtonText: 'Ok'
            }).catch(swal.noop);
          }else{
            swal({
              title: 'Failed',
              text: 'Wrong user infomation.',
              type: 'error',
              buttonsStyling: false,
              confirmButtonClass: 'btn btn-danger',
              confirmButtonText: 'Ok'
            }).catch(swal.noop);
          }
        } else {
          swal({
            title: 'Failed',
            text: 'Service suspended',
            type: 'error',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-danger',
            confirmButtonText: 'Ok'
          }).catch(swal.noop);
        }
      },
      err => {
        swal({
          title: 'Failed',
          text: 'Service suspended',
          type: 'error',
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-danger',
          confirmButtonText: 'Ok'
        }).catch(swal.noop);
      }
    );
  }

  activate(){
    this.serverService.post('activate_account', {
      email: this.user.email,
      activateCode: this.activate_code
    }).subscribe(
      (resp) => {
        if (resp['code'] === 200) {
          if(resp['msg'] == 'Success'){
            const data = resp['data'];
            this.authService.set('accountType', 'amigoParent');
            this.authService.set('email', data.email);
            this.authService.set('token', data.token);
            this.authService.set('schoolId', data.schoolId);
            this.router.navigate(['/home']);
          }else{
            swal({
              title: 'Failed',
              text: resp['msg'],
              type: 'error',
              buttonsStyling: false,
              confirmButtonClass: 'btn btn-danger',
              confirmButtonText: 'Ok'
            }).catch(swal.noop);
          }
        } else {
          swal({
            title: 'Failed',
            text: 'Service suspended',
            type: 'error',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-danger',
            confirmButtonText: 'Ok'
          }).catch(swal.noop);
        }
      },
      err => {
        swal({
          title: 'Failed',
          text: 'Service suspended',
          type: 'error',
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-danger',
          confirmButtonText: 'Ok'
        }).catch(swal.noop);
      }
    );
  }
  
}


