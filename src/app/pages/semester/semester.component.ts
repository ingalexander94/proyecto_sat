import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css'],
})
export class SemesterComponent implements OnInit {
  constructor(private uiService: UiService) {
    this.uiService.updateTitleNavbar('Semestres');
  }

  ngOnInit(): void {}
}
