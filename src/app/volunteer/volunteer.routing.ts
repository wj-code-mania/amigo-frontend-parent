import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolunteerComponent } from './volunteer.component';

const routes: Routes = [{
  path: '',
  component: VolunteerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerRoutingModule { }
