import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {
    path: 'iniciar-sesion',
    component: LoginComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'docente',
    loadChildren: () =>
      import('./teacher/teacher.module').then((m) => m.TeacherModule),
  },
  {
    path: 'estudiante',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
  },
  {
    path: '**',
    redirectTo: 'iniciar-sesion',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
