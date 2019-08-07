import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './authservice';
import { ServerService } from '../service/server';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(
    private authService: AuthService, 
    public serverService: ServerService,
    public server: ServerService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isValid()) {
      return true;
    } else {
      this.router.navigate(['/index']);
      // swal({
      //   title: 'Please Login!',
      //   text: 'Wrong email or password',
      //   type: 'error',
      //   buttonsStyling: false,
      //   confirmButtonClass: 'btn btn-danger',
      //   confirmButtonText: 'Ok'
      // }).catch(swal.noop);
      return false;
    }
  }
}
