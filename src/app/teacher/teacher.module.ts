import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherComponent } from './teacher.component';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NavbarComponent } from '../dashboard/navbar/navbar.component';

@NgModule({
  declarations: [TeacherComponent, DashboardComponent, NavbarComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class TeacherModule {}
