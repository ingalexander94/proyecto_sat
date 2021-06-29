import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './pages/auth/login-admin/login-admin.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {
    path: 'iniciar-sesion',
    component: LoginComponent,
  },
  {
    path: 'administrativo/iniciar-sesion',
    component: LoginAdminComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'docente',
    loadChildren: () =>
      import('./dashboard/teacher.module').then((m) => m.TeacherModule),
  },
  {
    path: 'estudiante',
    loadChildren: () =>
      import('./dashboard-student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'vicerrector',
    loadChildren: () =>
      import('./dashboard-wellness/wellness.module').then(
        (m) => m.WellnessModule
      ),
  },
  {
    path: 'jefe',
    loadChildren: () =>
      import('./dashboard-boss/boss.module').then((m) => m.BossModule),
  },
  {
    path: 'psicologo',
    loadChildren: () =>
      import('./dashboard-psychology/psychology.module').then(
        (m) => m.PsychologyModule
      ),
  },
  {
    path: '**',
    redirectTo: 'iniciar-sesion',
  },
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
