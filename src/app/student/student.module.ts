import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';

import { StudentComponent } from './student.component';

@NgModule({
  declarations: [StudentComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class StudentModule {}
