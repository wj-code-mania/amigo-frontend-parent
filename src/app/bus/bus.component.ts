import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ServerService } from '../service/server';
import { AuthService } from '../service/authservice';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {
  constructor(
    public serverService: ServerService,
    public server: ServerService,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

}
