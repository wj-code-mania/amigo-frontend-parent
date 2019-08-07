import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniformComponent } from './uniform.component';

const routes: Routes = [{
  path: '',
  component: UniformComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniformRoutingModule { }
