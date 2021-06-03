import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/course';
import { Title } from 'src/app/model/ui';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  title: Title = {
    title: 'Bases de datos - B',
    subtitle: 'Listado de estudiantes matriculados para el semestre actual.',
  };

  listStudents: Student[] = [
    {
      id: 1,
      code: '9876543',
      names: 'Pablo',
      surnames: 'Montoya',
      risk: 'red',
    },
    {
      id: 2,
      code: '7364758',
      names: 'Juan',
      surnames: 'Quintero',
      risk: 'red',
    },
    {
      id: 3,
      code: '8736337',
      names: 'Duvan',
      surnames: 'Zapata',
      risk: 'red',
    },
    {
      id: 4,
      code: '9843644',
      names: 'Pablo',
      surnames: 'Armero',
      risk: 'orange',
    },
    {
      id: 5,
      code: '5462784',
      names: 'Falcao',
      surnames: 'Garcia',
      risk: 'orange',
    },
    {
      id: 6,
      code: '7645367',
      names: 'Stefan',
      surnames: 'Medina',
      risk: 'yellow',
    },
    {
      id: 7,
      code: '6534267',
      names: 'Alvaro',
      surnames: 'Uribe',
      risk: 'green',
    },
  ];

  constructor(private router: Router, private uiService: UiService) {
    this.uiService.updateTitleNavbar('Materia');
  }

  ngOnInit(): void {}

  navigateToStudent() {
    this.router.navigate(['/estudiante']);
  }
}
