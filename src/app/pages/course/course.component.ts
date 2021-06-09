import { Component, OnInit } from '@angular/core';
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

  constructor(private uiService: UiService) {
    this.uiService.updateTitleNavbar('Materia');
  }

  ngOnInit(): void {}
}
