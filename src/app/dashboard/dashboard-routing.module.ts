import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from '../pages/course/course.component';
import { ListCourseComponent } from '../pages/list-course/list-course.component';
import { DashboardComponent } from './dashboard.component';

const children: Routes = [
  { path: '', component: ListCourseComponent },
  { path: 'materia', component: CourseComponent },
];

const routes: Routes = [{ path: '', component: DashboardComponent, children }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
