import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/model/ui';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-semester-wellness',
  templateUrl: './semester-wellness.component.html',
  styleUrls: ['./semester-wellness.component.css'],
})
export class SemesterWellnessComponent implements OnInit {
  title: Title = {
    title: 'Ingeniería de Sistemas',
    subtitle: '',
  };

  title2: Title = {
    title: 'Semestre I',
    subtitle: 'Listado total de estudiantes matriculados',
  };

  constructor(private uiService: UiService) {
    this.uiService.updateTitleNavbar('Semestre I');
  }

  ngOnInit(): void {}
}
