import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { User } from 'src/app/model/auth';
import { Course } from 'src/app/model/course';
import { Title } from 'src/app/model/ui';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css'],
})
export class ListCourseComponent implements OnInit {
  listCourses: Course[] = [
    {
      id: 1,
      name: 'Administración de proyectos informaticos',
      group: 'F',
    },
    {
      id: 2,
      name: 'Bases de datos',
      group: 'B',
    },
    {
      id: 3,
      name: 'Arquitectura de software',
      group: 'A',
    },
    {
      id: 4,
      name: 'Ingeniería del software',
      group: 'B',
    },
  ];

  title: Title = {
    title: 'Listado de Materias',
    subtitle: 'Materias que se encuentran activas durante el semestre actual.',
  };

  user: User;
  subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private uiService: UiService,
    private store: Store<AppState>
  ) {
    this.uiService.updateTitleNavbar();
  }

  ngOnInit(): void {
    this.subscription = this.store
      .select('auth')
      .subscribe(({ user }) => (this.user = user));
  }

  onNavigateToCourse() {
    if (this.user.role === 'docente' || this.user.role === 'jefe') {
      this.router.navigate(['/docente/materia']);
    } else {
      this.router.navigate(['/docente/perfil']);
    }
  }
}
