import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadStudentGuard } from '../guards/load-student.guard';
import { DashboardStudentComponent } from './dashboard-student.component';

const children: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./children/children.module').then((m) => m.ChildrenModule),
  },
  { path: '**', redirectTo: '' },
];

const routes: Routes = [
  {
    path: '',
    component: DashboardStudentComponent,
    children,
    canActivate: [LoadStudentGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardStudentRoutingModule {}
