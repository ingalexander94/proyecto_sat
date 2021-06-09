import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultiesComponent } from '../pages/faculties/faculties.component';
import { InRiskComponent } from '../pages/in-risk/in-risk.component';
import { PostulateListComponent } from '../pages/postulate-list/postulate-list.component';
import { SemesterWellnessComponent } from '../pages/semester-wellness/semester-wellness.component';
import { SemesterComponent } from '../pages/semester/semester.component';
import { DashboardWellnessComponent } from './dashboard-wellness.component';

const children: Routes = [
  { path: '', component: FacultiesComponent },
  { path: 'semestres', component: SemesterComponent },
  { path: 'semestre', component: SemesterWellnessComponent },
  { path: 'postulados', component: PostulateListComponent },
  { path: 'en-riesgo', component: InRiskComponent },
];

const routes: Routes = [
  { path: '', component: DashboardWellnessComponent, children },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WellnessRoutingModule {}
