import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=>import('./authenticate/authenticate.module').then(m=>m.AuthenticateModule)
  },
  {
    path: "",
    loadChildren: ()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path: "",
    loadChildren: ()=>import('./department/department.module').then(m=>m.DepartmentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
