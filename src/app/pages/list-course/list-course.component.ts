import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { Title } from 'src/app/model/ui';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNavigateToCourse() {
    this.router.navigate(['/docente/materia']);
  }
}
