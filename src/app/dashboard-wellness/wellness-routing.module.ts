import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BossGuard } from '../guards/boss.guard';
import { WellnessGuard } from '../guards/wellness.guard';
import { CourseDataComponent } from '../pages/course-data/course-data.component';
import { FacultiesComponent } from '../pages/faculties/faculties.component';
import { InRiskComponent } from '../pages/in-risk/in-risk.component';
import { PostulateListComponent } from '../pages/postulate-list/postulate-list.component';
import { SemesterWellnessComponent } from '../pages/semester-wellness/semester-wellness.component';
import { SemesterComponent } from '../pages/semester/semester.component';
import { DashboardWellnessComponent } from './dashboard-wellness.component';

const children: Routes = [
  { path: '', component: FacultiesComponent, canActivate: [WellnessGuard] },
  {
    path: 'semestres/programa/:nombre',
    component: SemesterComponent,
    canActivate: [BossGuard],
  },
  {
    path: 'semestre/:programa/:numero',
    component: SemesterWellnessComponent,
    canActivate: [BossGuard],
  },
  {
    path: 'postulados/:pagina',
    component: PostulateListComponent,
    canActivate: [BossGuard],
  },
  { path: 'en-riesgo', component: InRiskComponent, canActivate: [BossGuard] },
  { path: 'datos-curso', component: CourseDataComponent },
  {
    path: 'facultades',
    component: FacultiesComponent,
    canActivate: [WellnessGuard],
  },
];

const routes: Routes = [
  { path: '', component: DashboardWellnessComponent, children },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WellnessRoutingModule {}
