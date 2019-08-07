import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ServerService } from '../service/server';
import { AuthService } from '../service/authservice';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {
  constructor(
    public serverService: ServerService,
    public server: ServerService,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

}
