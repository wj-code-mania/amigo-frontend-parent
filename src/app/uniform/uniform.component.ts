import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ServerService } from '../service/server';
import { AuthService } from '../service/authservice';

@Component({
  selector: 'app-uniform',
  templateUrl: './uniform.component.html',
  styleUrls: ['./uniform.component.scss']
})
export class UniformComponent implements OnInit {
  constructor(
    public serverService: ServerService,
    public server: ServerService,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

}
