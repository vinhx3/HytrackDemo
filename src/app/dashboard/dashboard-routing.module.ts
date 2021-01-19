import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashPgComponent } from './dash-pg/dash-pg.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashPgComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
