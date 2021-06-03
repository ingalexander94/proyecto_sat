import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultiesComponent } from '../pages/faculties/faculties.component';
import { SemesterComponent } from '../pages/semester/semester.component';
import { DashboardWellnessComponent } from './dashboard-wellness.component';

const children: Routes = [
  { path: '', component: FacultiesComponent },
  { path: 'semestres', component: SemesterComponent },
];

const routes: Routes = [
  { path: '', component: DashboardWellnessComponent, children },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WellnessRoutingModule {}
