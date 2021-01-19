import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DepartmentRoutingModule } from './department-routing.module';
import { FoodDepartmentComponent } from './food-department/food-department.component';


@NgModule({
  declarations: [FoodDepartmentComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    SharedModule
  ]
})
export class DepartmentModule { }
