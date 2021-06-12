import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from 'src/app/model/ui';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  title: Title = {
    title: 'Lista de Citas',
    subtitle: '',
  };

  constructor(private uiService: UiService, private router: Router) {
    this.uiService.updateTitleNavbar('Agenda');
  }

  ngOnInit(): void {}

  toStudent() {
    this.router.navigate(['/estudiante']);
  }
}
