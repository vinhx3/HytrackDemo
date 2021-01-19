import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashPgComponent } from './dash-pg/dash-pg.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DashPgComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
