import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjecstHomeComponent } from './projects-home/projecst-home.component';

const routes: Routes = [ { path: 'projects', component: ProjecstHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
