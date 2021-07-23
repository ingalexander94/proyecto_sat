import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDataComponent } from '../pages/course-data/course-data.component';
import { FacultiesComponent } from '../pages/faculties/faculties.component';
import { InRiskComponent } from '../pages/in-risk/in-risk.component';
import { PostulateListComponent } from '../pages/postulate-list/postulate-list.component';
import { SemesterWellnessComponent } from '../pages/semester-wellness/semester-wellness.component';
import { SemesterComponent } from '../pages/semester/semester.component';
import { DashboardWellnessComponent } from './dashboard-wellness.component';

const children: Routes = [
  { path: '', component: FacultiesComponent },
  { path: 'semestres/programa/:nombre', component: SemesterComponent },
  { path: 'semestre/:programa/:numero', component: SemesterWellnessComponent },
  { path: 'postulados/:pagina', component: PostulateListComponent },
  { path: 'en-riesgo', component: InRiskComponent },
  { path: 'datos-curso', component: CourseDataComponent },
  { path: 'facultades', component: FacultiesComponent },
];

const routes: Routes = [
  { path: '', component: DashboardWellnessComponent, children },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WellnessRoutingModule {}
