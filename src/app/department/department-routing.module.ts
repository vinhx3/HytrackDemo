import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodDepartmentComponent } from './food-department/food-department.component';

const routes: Routes = [
  {
    path: "food-department",
    component: FoodDepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
